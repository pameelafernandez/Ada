var express = require('express');
var router = express.Router();
var axios = require('axios');

//http://localhost:8080/api/items?q=batman

// Esta ruta me devuelve 4 productos
router.get('/items', function(req, res) {
  const q = req.query.q;
  axios
  .get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + q )
  .then(function (result) {
    
    const apiCategories = result.data.available_filters.find(p => p.id === 'category')
    const categories = apiCategories.values

    categories.sort(function (a, b) {
      if (a.results > b.results) {
        return -1
      }
      if (a.results < b.results) {
        return 1
      }
      return 0
    })

    const dataApi = result.data.results.map(function (p) {
      return {
        id: p.id,
        title: p.title,
        price: {
          currency: p.currency_id,
          amount: String(p.price).split('.')[0],
          decimals: String(p.price).split('.')[1] || '0'
        },
        picture: p.thumbnail,
        condition: p.condition,
        free_shipping: p.shipping.free_shipping,
        location: p.address.state_name
      }
    })
    res.json({
      categories: categories[0],
      items: dataApi
    })
  })
 
});

// Esta me trae sólo 1 producto
router.get('/items/:id', function(req, res) {
  const id = req.params.id
  axios.get('https://api.mercadolibre.com/items/' + id + '/description')
  .then(resultDescription => {
    axios.get('https://api.mercadolibre.com/categories/' + category)
    .then(resultCategory => {
      const resultCategoryMap = resultCategory.data.path_from_root.map(
        c => { return c.name })
      const myProducts = {
        categories: resultCategoryMap, 
        item: {
          id: resultProductProp.id,
          title: resultProductProp.title,
          price: {
            currency: resultProductProp.currency_id,
            amount: String(resultProductProp.price).split('.')[0],
            decimal: String(resultProductProp.price).split('.')[1] || '0'
          },
          picture: resultProductProp.thumbnail,
          condition: resultProductProp.condition,
          shipping: resultProductProp.shipping.free_shipping,
          sold_quantity: resultProductProp.sold_quantity
        },
        categoryId: category,
        description: resultDescription.data.plain_text
      }
      res.json(myProducts)
    })
  })
});

module.exports = router;
