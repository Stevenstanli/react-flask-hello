"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, User_Details, Provider, Provider_Details, Category, Product , Product_Details, Inventory, Movement_Inventory
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#-----------------------------------Provider-----------------------------------------------------------------------------------------------

@api.route('/provider',methods=['GET'])
def listProvider():
    provider = Provider.query.all()
    provider_serialized = list(map(lambda data: data.serialize(), provider))
    return jsonify(provider_serialized),200

@api.route('/provider',methods=['POST'])
def addProvider():
    request_body = request.get_json()
    provider = Provider(id_Provider=request_body["id_Provider"],
                name_Provider=request_body["name_Provider"],
                active_Provider=request_body["active_Provider"])
    properties = Provider_Details(
                id_Provider_Details=request_body["id_Provider"],
                id_Provider=request_body["id_Provider"],
                email_Provider_Details=request_body["email_Provider_Details"], 
                phone_Provider_Details=request_body["phone_Provider_Details"],
                address_Provider_Details=request_body["address_Provider_Details"],
                payment_Type_Provider_Details=request_body["payment_Type_Provider_Details"])

    db.session.add(provider)
    db.session.add(properties)
    db.session.commit()
    return jsonify("All good"), 200

@api.route('/providerUpdate/<string:id_Provider>', methods=['PUT'])
def update_prov(id_Provider):

    # recibir info del request
    
    prov = Provider.query.get(id_Provider)
    proper = Provider_Details.query.get(id_Provider)
    
    print("Hola")
    if prov  is None:
        raise APIException('Provider not found', status_code=404)
    if proper  is None:
        raise APIException('Provider_Details not found', status_code=404)

    request_body = request.get_json()

    if "name_Provider" in request_body:
        prov.name_Provider = request_body["name_Provider"]
    if  "email_Provider_Details" in request_body:
        proper.email_Provider_Details = request_body ["email_Provider_Details"]
    if  "phone_Provider_Details" in request_body:
        proper.phone_Provider_Details = request_body ["phone_Provider_Details"]
    if  "address_Provider_Details" in request_body:
        proper.address_Provider_Details = request_body ["address_Provider_Details"]
    if  "payment_Type_Provider_Details" in request_body:
        proper.payment_Type_Provider_Details = request_body ["payment_Type_Provider_Details"]
     
    

    db.session.commit()

    return jsonify("All good"), 200

@api.route('/providerEliminate/<string:id_Provider>', methods=['PUT'])
def update_Eliminate(id_Provider):

    
    prov = Provider.query.get(id_Provider)
    
    if prov  is None:
        raise APIException('Provider not found', status_code=404)

    request_body = request.get_json()

    if "active_Provider" in request_body:
        prov.active_Provider = "Inactivo"

    db.session.commit()

    return jsonify("All good"), 200



#------------------------------------------------------Category----------------------------------------------------------------------------

#------------------------------------Seleccionar-------------------------------------
@api.route('/category',methods=['GET'])
def listCategory():
    category = Category.query.all()
    category_serialized = list(map(lambda data: data.serialize(), category))
    return jsonify(category_serialized),200

#---------------------------------Ingresar-------------------------------------------
@api.route('/category',methods=['POST'])
def addCategory():
    request_body = request.get_json()
    category = Category(name_Category=request_body["name_Category"],
                        description_Category=request_body["description_Category"],
                        active_Product=request_body["active_Product"])
    print(request_body)
    db.session.add(category)
    db.session.commit()
    return jsonify("All good"), 200

#-------------------------------Actualizar----------------------------------------------
@api.route('/categoryUpdate/<string:id_Category>', methods=['PUT'])
def update_Category(id_Category):

    # recibir info del request
    
    cat = Category.query.get(id_Category)

    if cat  is None:
        raise APIException('Category not found', status_code=404)
        
    request_body = request.get_json()

    if "name_Category" in request_body:
        cat.name_Category = request_body ["name_Category"]
    if  "description_Category" in request_body:
        cat.description_Category = request_body ["description_Category"]

    db.session.commit()

    return jsonify("All good"), 200

#------------------------------Eliminar------------------------------------------------
@api.route('/categoryEliminate/<string:id_Category>', methods=['PUT'])
def Eliminate_Category(id_Category):

    
    cat = Category.query.get(id_Category)
    
    if cat  is None:
        raise APIException('Category not found', status_code=404)

    request_body = request.get_json()
    db.session.delete(cat)
    db.session.commit()

    return jsonify("All good"), 200

#------------------------------------------------------User----------------------------------------------------------------------------

@api.route('/user',methods=['GET'])
def get_user():
    user = User.query.all()
    user_serialized = list(map(lambda data: data.serialize(), user))
    return jsonify(user_serialized),200

@api.route('/user',methods=['POST'])
def add_user():
    request_body = request.get_json()
    user = User(id_Document_User=request_body["id_Document_User"],
                         name_User=request_body["name_User"],
                         active_User=request_body["active_User"])
    properties = User_Details(
                            id_User_Details=request_body["id_Document_User"],
                            id_Document_User=request_body["id_Document_User"],
                            email_User_Details=request_body["email_User_Details"],
                            password_User_Details=request_body["password_User_Details"], 
                            cargo_User_Details=request_body["cargo_User_Details"],
                            phone_User_Details=request_body["phone_User_Details"],
                            address_Details=request_body["address_Details"])
    print(request_body)
    db.session.add(user)
    db.session.add(properties)
    db.session.commit()
    return jsonify("All good"), 200  

@api.route('/login',methods=['POST'])
def login():

    #login
    userlogin = request.json.get("name_User", None)
    passwordlogin = request.json.get("password_User_Details",None)
    

    request_body = request.get_json()


    user = User(
                name_User = request_body["name_User"], 
                active_User = request_body["active_User"])
    properties = User_Details(
                              password_User_Details = request_body["password_User_Details"])
    
    return jsonify("All good"), 200   




#----------------------------------------Product------------------------------------------------------------------------------------------
@api.route('/product',methods=['GET'])
def get_product():
    product = Product.query.all()
    product_serialized = list(map(lambda data: data.serialize(), product))
    return jsonify(product_serialized),200

@api.route('/product',methods=['POST'])
def add_product():
    request_body = request.get_json()
    product = Product(id_Product=request_body["id_Product"],
                         name_Product=request_body["name_Product"],
                        #  id_Category=request_body["id_Category"],
                        #  id_Provider=request_body["id_Provider"],
                         active_Product=request_body["active_Product"])
    properties = Product_Details(
                            id_Product_Details=request_body["id_Product"],
                            id_Product=request_body["id_Product"],
                            trade_Product_Details=request_body["trade_Product_Details"],
                            tax_Product_Details=request_body["tax_Product_Details"],
                            description_Product_Details=request_body["description_Product_Details"],
                            price_In_Product_Details=request_body["price_In_Product_Details"],
                            profit_Product_Details=request_body["profit_Product_Details"],
                            price_Out_Product_Details=request_body["price_Out_Product_Details"], 
                            discount_Product_Details=request_body["discount_Product_Details"])
    print(request_body)
    db.session.add(product)
    db.session.add(properties)
    db.session.commit()
    return jsonify("All good"), 200
                                                  
#----------------------------------------Inventory------------------------------------------------------------------------------------------
@api.route('/inventory',methods=['GET'])
def get_inventory():
    inventory = Inventory.query.all()
    inventory_serialized = list(map(lambda data: data.serialize(), inventory))
    return jsonify(inventory_serialized),200

    return jsonify("All good"), 200
    provider = Provider.query.all()
    provider_serialized = list(map(lambda data: data.serialize(), provider))
    return jsonify(provider_serialized),200

#----------------------------------------------------------------------------------------------------------------------------------