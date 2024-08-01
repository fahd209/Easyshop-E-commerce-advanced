# Easyshop-E-commerce-advanced

## Website overview
This webiste is a user friendly online e-commerce store. The website's front-end is built using React.js, styled with material UI and bootstrap. The backend of the project is built using Java spring boot. The front-end is connected with backe-nd using RESTFUL API's. The front-end makes an API protocall to backend using axios. The backend has controllers canting all the API responds. The server is secured with spring secuirty. The user's are authenticated with JWT. The application contanrized using with docker.

## Tools used

* HTML, CSS, Bootstrap, MUI
* React.js
* Spring boot
* Spring secuirty
* JWT Tokens
* Docker

## Front-end
HTML, CSS, Bootstrap, MUI, React.js

### Home Page

![homePage](readMeFileimages/homeScreen.png)

### Shop

![homePage](readMeFileimages/shopPage.png)

### Responsiveness

![homePageMobile](readMeFileimages/homePageMobile.png)

* Insured responsive using css and material Ui, allowing website to work on multiple devices(Computers, Mobile)

## API call to backend

The code below makes an API call to the backend to get the data in the cart and display's in the front-end

```Javascript
useEffect(() => {
    const getCart = async () => {
      const url = `${baseUrl}/cart`
      try{
        const response = await axios.get(url, {
          headers: { // passing the current user token every time the req is called
              'Authorization': `Bearer ${currentUser.token}`,
            },
        })
        if(response.data.items && typeof response.data.items === 'object')
        {
          setCartItemsData(Object.values(response.data.items));
          setCartData(response.data)
          console.log(Object.values(response.data.items))
        }
      }
      catch(error)
      {
        displayMessage("Failed to load cart", "Error")
      }
    }
    getCart();
  }, [])

```

## BACK END

## Diagram
![backend-diagram](readMeFileimages/backendPatternDiagram.png)
([Link for diagram](https://lucid.app/lucidchart/0d55c612-f50c-4b17-9621-9e9d3adc7cc4/edit?viewport_loc=-1201%2C-1369%2C2994%2C1452%2C0_0&invitationId=inv_c38d4138-bce2-4911-960d-0b76ab51be17))

The back-end is designed in the pattern above. The MVC pattern. The api call goes to the controller and the controllers calls a functions in the DAO. The DAO makes models depending on the call the was made examples would be a call to get the products. The DAO would make product models and adds it to the list. The list then gets send back to the front-end in a json String.

The front-end would make a call to here if i opened the cart page.

```java
@GetMapping("/cart")
    public ShoppingCart getCart(Principal principal)
    {
        try
        {
            // getting username from current user
            String userName = principal.getName();

            // getting user by name then getting the user id
            User user = userDao.getByUserName(userName);
            int userId = user.getId();

            // use the shoppingcartDao to get all items in the cart and return the cart
            return shoppingCartDao.getByUserId(userId);
        }
        catch(Exception e)
        {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Oops... our bad.");
        }
    }
```

An example of the DAO is below
```java
@Override
    public ShoppingCart getByUserId(int userId) {
        ShoppingCart shoppingCart = new ShoppingCart();
        // getting the shopping cart with the user id
        String sql = """
                SELECT *
                FROM shopping_cart
                WHERE user_id = ?;
                """;

        try(Connection connection = getConnection())
        {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, userId);
            ResultSet row = preparedStatement.executeQuery();

            while(row.next())
            {
                // getting all the shopping item and adding them to the shopping cart class
                ShoppingCartItem shoppingCartItem = mapToItem(row);
                shoppingCart.add(shoppingCartItem);
            }
        }
        catch (Exception e)
        {
            throw new RuntimeException(e);
        }
        // returning shopping cart to the api call
        return shoppingCart;
    }
```

# Docker
This application is containrized using docker. There are 3 docker containers in this application. One for the front-end, one for the backend, and one for the database.

![dockerDiagram](readMefileimages/docker-diagram.png)

# How to run the project

1) Clone the repo to your computer
2) Run the database file on mySql
3) Open the backend server on your intelliJ, go to src/main/resource/application.properties
4) Insure that the password the for the database matches the one on your computer in the application properties
5) Run the backend server on intelliJ 
6) Open the easyshop client on vs code
7) Open the terminal and type "npm start"