/**
 * Presale.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

/**
  * @description
  * Model entity Presale
 */
module.exports = {

  attributes: {
    nombreProyecto: {
      type: 'string',
      required: true,
      unique: true
    },
    cuentaAnalitica: {
      type: 'string',
      required: true
    },
    cliente: {
      type: 'string',
      required: true
    },
    costo: {
      type: 'number'
    },
    fechaInicio:{
      type: 'string',
      required: true
    },
    fechaFin: {
      type: 'string',
      required: true
    },
    fechaCierre: {
      type: 'string',
      required: true
    },
    porcentaje: {
      type: 'number'
    },
    ingresos: {
      type: 'number'
    },
    gerenteComercial: {
      type: 'string',
      required: true
    },
    comercial: {
      type: 'string',
      required: true
    },
    equipoVenta: {
      type: 'string',
      required: true
    },
    compania: {
      type: 'string',
      required: true
    },
    lineaNegocio: {
      type: 'string',
      required: true
    },
    tipoServicio: {
      type: 'string',
      required: true
    },
    sede: {
      type: 'string',
      required: true
    },
    etiquetaAnaliticas: {
      type: 'string',
    },
    tipoMoneda: {
      type: 'string',
      required: true
    },
    participacion: {
      type: 'number',
      isIn: [0,1],
      required: true
    },
    objetivo: {
      type: 'string',
      required: true
    }
  }

};

