/* GET homepage */
const menu = (req, res) => {
    res.render('menu',
      {
        title: 'Menu',
        pageHeader: { title: 'Menu List' }
      }
    );
  };
  
  module.exports = {
    menu
  };
  