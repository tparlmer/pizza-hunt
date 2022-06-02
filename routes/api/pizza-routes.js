const router = require('express').Router();
//Instead of importing the entire object and having to do pizzaController.getAllPizza(), we can simply destructure the method names out of the imported object and use those names directly. Let's implement them into the routes, starting with /api/pizzas. Update the code for router.route('/') as follows:
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller')

// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router  
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;

/* NOTE:
// this code
router.route('/').get(getCallbackFunction).post(postCallbackFunction);

// is this same as this
router.get('/', getCallbackFunction);
router.post('/' postCallbackFunction);
*/