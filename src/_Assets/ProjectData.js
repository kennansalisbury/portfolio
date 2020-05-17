//import images
//meetout
import meetImg from './img/meet_out/user-home.png'
import meetModal from './img/meet_out/modal.png'
import meetDetails from './img/meet_out/details.png'

//giving tree
import givingImg from './img/giving_tree/hero-img.png'
import drive from './img/giving_tree/drive.png'
import cart from './img/giving_tree/cart.png'
import dashboard from './img/giving_tree/dashboard.png'

//express chef
import chefImg from './img/exp_chef/by-category.png'
import search from './img/exp_chef/search.png'
import results from './img/exp_chef/search-results.png'
import recipe from './img/exp_chef/recipe.png'
import saved from './img/exp_chef/saved-recipes.png'
import dinner from './img/exp_chef/dinner.png'

//scrammble
import scrammbleImg from './img/scrammble/scrammble.png'


const Projects = [
    {
        "title": "Meet Out",
        "tech": "TypeScript, React, Node.js, Express, JavaScript, MongoDB/Mongoose, HTML/CSS, Reactstrap",
        "description": "Build community with like-minded outdoor activity and fitness enthusiasts.",
        "demoLink": "https://meeting-out.herokuapp.com/",
        "demoUn": "beargrylls@gmail.com",
        "demoPw": "password",
        "github": "https://github.com/kennansalisbury/meet-out",
        "github2": null,
        "images": [
            {
               "img": meetImg,
                "caption": "View calendar and scheduled meets",
                "alt": "meet-out-home screenshot"
            },
            {
               "img": meetModal,
                "caption": "View more info on a meet",
                "alt": "meet-out-modal screenshot"
            },
            {
               "img": meetDetails,
                "caption": "Full meet details",
                "alt": "meet-out-details screenshot"
            },
    ]
    },
    {
        "title": "The Giving Tree",
        "tech": "React, Node.js, Express, JavaScript, PostgreSQL, SQL/Sequelize, HTML/CSS, Material UI",
        "description": "View an organization's donation needs, purchase to donate, and see the impact your contributions are making.",
        "demoLink": "https://givingtree.netlify.app",
        "demoUn": "motherteresa@gmail.com",
        "demoPw": "password",
        "github": "https://github.com/kennansalisbury/giving_client",
        "github2": "https://github.com/kennansalisbury/giving_server",
        "images": [{
           "img": givingImg,
            "alt": "giving tree screenshot of login and user home",
            "caption": "Log in/sign up and view a dashboard of all current donation drives"
        },
        {
            "img": drive,
             "alt": "giving tree screenshot of drive details",
             "caption": "View details on a current drive and the impact your donations can make"
         },
         {
            "img": cart,
             "alt": "giving tree screenshot of shopping cart details",
             "caption": "Purchase the items for donations within the app"
         },
         {
            "img": dashboard,
             "alt": "giving tree screenshot of user dashboard",
             "caption": "View overall impact of your donations over time"
         }]
    },
    {
        "title": "Express Chef",
        "tech": "Node.js, Express, EJS, PostgreSQL, SQL/Sequelize, HTML/CSS, Bootstrap",
        "description": "Search, save, create and categorize recipes in your own digital cookbook.",
        "demoLink": "https://express-chef.herokuapp.com/auth/login/test-user",
        "demoUn": "juliachild@gmail.com",
        "demoPw": "password",
        "github": "https://github.com/kennansalisbury/express-chef",
        "github2": null,
        "images": [{
           "img": chefImg,
            "alt": "express chef screen to view saved recipes by category",
            "caption": "View saved recipes by category"
        },
        {
            "img": search,
             "alt": "express chef screen to search for recipes",
             "caption": "Search for recipes"
         },
         {
            "img": results,
             "alt": "express chef screenshot of search results",
             "caption": "View search results"
         },
         {
            "img": recipe,
             "alt": "express chef screenshot of recipe details",
             "caption": "View recipe details"
         },
         {
            "img": saved,
             "alt": "express chef screenshot of saved recipes",
             "caption": "Saved recipes"
         },
    ]
    },
    {
        "title": "Scrammble",
        "tech": "JavaScript, HTML, CSS, Materialize",
        "description": "A one-round, time restricted word game in which 2 players compete to play the best word from a random set of tiles.",
        "demoLink": "https://scrammble.netlify.app/",
        "demoUn": null,
        "demoPw": null,
        "github": "https://github.com/kennansalisbury/scrabble_scramble",
        "github2": null,
        "images": [{
           "img": scrammbleImg,
            "alt": "scrammble image",
            "caption": "Home"
        }]
    },
]

export default Projects