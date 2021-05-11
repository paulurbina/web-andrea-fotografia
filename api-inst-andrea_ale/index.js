// Require env config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const morgan = require('morgan');
const { sendEmailAUser } = require('./helpers')
const Joi = require('joi');
const helmet = require('helmet');
const express = require('express')
const cors = require('cors')
const https = require('https')
const path = require('path')
const app = express()

const axios = require('axios');


app.set('port', process.env.PORT || 4300);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

const formatJSONFunc = (values) => values.data.filter(item => item.media_type != "VIDEO" && (delete item.id && delete item.media_type))


app.get('/url_ism_pa-api', async(req, res) => {

    https.get(process.env.URL_ISM_PA, (response) => {
        let data = '';

        // called when a data chunk is received.
        response.on('data', (chunk) => {
            data += chunk;
        });

        // called when the complete response is received.
        response.on('end', () => {
            const { data: dataJSON } = JSON.parse(data)
            const formatDataJSON = formatJSONFunc(dataJSON)
            res.json(formatDataJSON)
        });

    }).on("error", (error) => {
        console.log("Error: " + error.message);
    });
})

app.get('/url_ism_al-api', async(req, res) => {
    try {
        const { data: values } = await axios.get(process.env.URL_ISM_AL)
        const formatDataJSON = formatJSONFunc(values)
        res.status(200).json(formatDataJSON)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Problemas con el servicio"
        })

    }
})



app.post('/register_user', async(req, res) => {

    // configura el pattern
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(30).required().messages({
            "string.base": `Nombre no es una cadena.`,
            "string.empty": `Nombre no puede ser un campo vacio.`,
            "any.required": `Nombre es requerido.`,
            "string.min": `Nombre debe tener una longitud mínimo de 3 caracteres.`,
            "string.max": `Nombre debe tener una longitud máximo de 30 caracteres.`,
            "string.normalize": `La cadena no es válida con respecto a la forma de normalización esperada.`
        }),
        email: Joi.string().email({
            allowUnicode: true,
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] }
        }).min(6).max(40).required().messages({
            "string.base": `Email no es una cadena.`,
            "string.email": `Email" debe ser un tipo de correo electrónico.`,
            "string.empty": `Email no puede ser un campo vacio`,
            "any.required": `Email es requerido.`,
            "string.min": `Email debe tener una longitud mínimo de 6 caracteres.`,
            "string.max": `Nombre debe tener una longitud máximo de 40 caracteres.`,
        }),
        phone: Joi.number().positive().min(9).integer().required().messages({
            "number.base": `Celular no es una numero.`,
            "number.empty": `Celular no puede ser un campo vacio`,
            "number.positive": `Celular no es un numero positivo.`,
            "number.integer": `Celular no es un numero entero.`,
            "number.min": `Celular debe tener una longitud mínimo de 9 caracteres.`,
            "any.required": `Celular es requerido.`,
        }),
        sesion: Joi.string().required().valid('maternidad', 'primer_anio', 'familia', 'producto_1', 'producto_2', 'producto_3').messages({
            "string.base": `Sesión no es una cadena.`,
            "string.empty": `Sesión no puede ser un campo vacio`,
            "any.required": `Sesión es requerido.`,
            "any.only": `No esta dentro de las opciones.`,
        }),
    });


    try {
        const { error, value } = await schema.validate(req.body);

        if (error) {
            return res.status(401).json({
                success: false,
                text: 'Ingrese el dato correctamente',
                data: error.message
                    // error.message
            })
        }

        const responseSMTP = await sendEmailAUser(req.body)
        if (responseSMTP.rejected.length > 0) {
            return res.status(401).json({
                success: true,
                text: 'El correo no ha podido enviarse.',
                data: {}
            })
        }

        res.status(200).json({
            success: true,
            text: 'Se acaba de registrar, gracias!.',
            data: {}
        })

    } catch (error) {
        console.error(error);
    }
})


app.listen(app.get('port'), () => {
    console.log(`Server app listening at http://localhost:${app.get('port')}`)
})