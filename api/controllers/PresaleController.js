/**
 * PresaleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * @api {POST} /api/v1/create Creation of the presale resource
   * @apiName create
   * @apiGroup Presale
   *
   * @apiSuccess {Object} id Presale identifier.
  */
  create: async (req, res) => {
    try {
      /**
       * @description
       * Gets the parameters in the body of the request
      */
      const presale = req.allParams();

      /**
       * @description
       * Validate that the body of the request has data
      */
      if (!Object.entries(presale).length) {
        return res.status(400).json({message: `No se han proporcionado datos`});
      }

      /**
       * @description
       * New presale resource is created
       */
      const newPresale = await Presale.create(presale).fetch();

      if (newPresale.id) {
        return res.status(200).json({message: `Se ha creado la preventa con id ${newPresale.id}`});
      }
    } catch (err) {
      /**
       * @description
       * Error handler
      */
      if (err.message) {
        return res.status(500).json({error: err.message});
      }
      return res.status(500).json(err);
    }
  },

  /**
   * @api {PUT} /api/v1/update Update of the presale resource
   * @apiName update
   * @apiGroup Presale
   *
   * @apiParam {Number} id Presale unique ID.
   *
   * @apiSuccess {Object} id Presale identifier.
  */
  update: async (req, res) => {
    try {
      /**
       * @description
       * Gets the parameters in the body of the request
      */
      const id = req.param('id');
      const presale = req.body;

      /**
       * @description
       * Validate that the body of the request has data
       */
      if (!Object.entries(presale).length) {
        return res.status(400).json({message: `No se han proporcionado datos`});
      }

      /**
       * @description
       * Updated presale resource
       */
      const updatePresale = await Presale.updateOne({ id }).set(presale);

      if (updatePresale.id) {
        return res.status(200).json({message: `Se ha actulizado la preventa con id ${updatePresale.id}`});
      }
    } catch (err) {
      /**
       * @description
       * Error handler
      */
      if (err.message) {
        return res.status(500).json({error: err.message});
      }
      return res.status(500).json(err);
    }
  },

  /**
   * @api {DELETE} /api/v1/delete Delete of the presale resource
   * @apiName delete
   * @apiGroup Presale
   *
   * @apiParam {Number} id Presale unique ID.
   *
   * @apiSuccess {Object} id Presale identifier.
  */
  delete: async (req, res) => {
    try {
      /**
       * @description
       * Gets the parameters in the path of the request
      */
      const id = req.param('id');

      /**
       * @description
       * Presale resource deleted
       */
      const deletePresale = await Presale.destroyOne({ id });

      if (deletePresale.id) {
        return res.status(200).json({message: `Se ha eliminado la preventa con id ${deletePresale.id}`});
      }

    } catch (err) {
      /**
       * @description
       * Error handler
      */
      if (err.message) {
        return res.status(500).json({error: err.message});
      }
      return res.status(500).json(err);
    }
  },

  /**
   * @description
   * GET method, presale resource list.
  */

  /**
   * @api {GET} /api/v1/get Getting all of the presale resource
   * @apiName get
   * @apiGroup Presale
   *
   * @apiSuccess {Object} Presales list of objects.
  */
  get: async (req, res) => {
    try {
      /**
       * @description
       * Get all pre-sale resources
       */
      const presales = await Presale.find();

      return res.status(200).json(presales);

    } catch (err) {
      /**
       * @description
       * Error handler
      */
      if (err.message) {
        return res.status(500).json({error: err.message});
      }
      return res.status(500).json(err);
    }
  },

  /**
   * @description
   * GET method, presale resource list.
  */

  /**
   * @api {GET} /api/v1/getPresale/:id Getting one of the presale resource
   * @apiName getPresale
   * @apiGroup Presale
   *
   * @apiParam {Number} id Presale unique ID.
   *
   * @apiSuccess {Object} Presales one object.
  */
  getPresale: async (req, res) => {
    try {
      /**
       * @description
       * Gets the parameters in the path of the request
      */
      const id = req.param('id');

      /**
       * @description
       * Get a presale resource
       */
      const presale = await Presale.findOne({ id });

      return res.status(200).json(presale);

    } catch (err) {
      /**
       * @description
       * Error handler
      */
      if (err.message) {
        return res.status(500).json({error: err.message});
      }
      return res.status(500).json(err);
    }
  }
};

