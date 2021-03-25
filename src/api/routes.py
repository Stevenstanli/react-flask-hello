"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, User_Details, Provider, Provider_Details, Category, Product , Product_Details, Inventory, Movement_Inventory
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import datetime

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

#----------------------------------------Seleccionar--------------------------------
@api.route('/user',methods=['GET'])
def get_user():
    user = User.query.all()
    user_serialized = list(map(lambda data: data.serialize(), user))
    return jsonify(user_serialized),200

#----------------------------------------Ingresar-----------------------------------
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

    hashed_password = generate_password_hash(properties.password_User_Details)
    properties.password_User_Details = hashed_password

    db.session.add(user)
    db.session.add(properties)
    db.session.commit()
    return jsonify("All good"), 200 


@api.route('/user/<string:id_Document_User>', methods=['PUT'])
def update_user(id_Document_User):


    userUpdate = User.query.get(id_Document_User)
    
    
    print("Hola")
    if userUpdate  is None:
        raise APIException('User not found', status_code=404)
    

    request_body = request.get_json()

    if "name_User" in request_body:
        userUpdate.name_User = request_body["name_User"]
    if  "email_User_Details" in request_body:
        userUpdate.user.email_User_Details = request_body ["email_User_Details"]
    if  "password_User_Details" in request_body:
        userUpdate.user.password_User_Details = request_body ["password_User_Details"]
    if  "cargo_User_Details" in request_body:
        userUpdate.user.cargo_User_Details = request_body ["cargo_User_Details"]
    if  "phone_User_Details" in request_body:
       userUpdate.user.phone_User_Details = request_body ["phone_User_Details"]
    if  "address_Details" in request_body:
       userUpdate.user.address_Details = request_body ["address_Details"]   
     
    db.session.commit()

    return jsonify("All good"), 200    
#-------------------------------------------------login-----------------------------------------------------------------------------
@api.route('/login',methods=['POST'])
def login():

    #login
    userlogin = request.json.get("name_User", None)
    passwordlogin = request.json.get("password_User_Details",None)


    if not userlogin:
        return jsonify({"msg":"Username is required"}),400
    if not passwordlogin:
        return jsonify({"msg":"password is required"}),400

    user = User_Details.query.filter(User.name_User == userlogin).first()
    #passwordselect = User_Details.filter_by().first()

    if not user:
        return jsonify({"msg":"Username / Password are incorrect"}),401

    #id_user = User.query.filter_by(name_User = user).first()

    if not check_password_hash(user.password_User_Details, passwordlogin):
            return jsonify({"Mensaje": "La constraseña es incorrecta"}), 401 


    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity=user.user.name_User, expires_delta=expiracion)
    data = {
            "user": user.serialize(),
            "token": access_token
        }                                

    return jsonify(data), 200 
#---------------------------------------------password------------------------------------------------------------------------------------

# @api.route('/changePass/<string:id_Document_User>', methods=['PUT'])
# def update_pass(id_Document_User):

#     # recibir info del request
    
#     userId = User.query.get(id_Document_User)

#     if userId  is None:
#         raise APIException('Pass not found', status_code=404)
        
#     request_body = request.get_json()

#     if "password_User_Details" in request_body:
#         userId.user.password_User_Details = request_body ["password_User_Details"]
    
#     db.session.commit()

#     return jsonify("All good"), 200  



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
                         id_Category=request_body["id_Category"],
                         id_Provider=request_body["id_Provider"],
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

@api.route('/inventory',methods=['POST'])
def add_inventory():
    request_body = request.get_json()

    inventory = Inventory(id_Inventory=request_body["id_Inventory"],
                          id_Product=request_body["id_Product"],
                          quantity_Product_Inventory=request_body["quantity_Product_Inventory"],
                          max_Product_Inventory=request_body["max_Product_Inventory"], 
                          min_Product_Inventory=request_body["min_Product_Inventory"],
                          total_Cost_Inventory=request_body["total_Cost_Inventory"])
    print(request_body)
    db.session.add(inventory)
    db.session.commit()
    return jsonify("All good"), 200
    provider = Provider.query.all()
    provider_serialized = list(map(lambda data: data.serialize(), provider))
    return jsonify(provider_serialized),200


#--------------------------Movement_Inventory----------------------------------------------------------------------------------------------------

@api.route('/Movement_Inventory',methods=['GET'])
def get_Movement_Inventory():
    movement_inventory = Movement_Inventory.query.all()
    movement_inventory_serialized = list(map(lambda data: data.serialize(), movement_inventory))
    return jsonify(movement_inventory_serialized),200


@api.route('/Movement_Inventory',methods=['POST'])
def add_Movement_Inventory():
    request_body = request.get_json()

    movement_inventory = Movement_Inventory(id_Movement=request_body["id_Movement"],
                                            id_Product=request_body["id_Product"],
                                            id_Document_User=request_body["id_Document_User"],
                                            id_Orden=request_body["id_Orden"], 
                                            quantity_Product_Movement=request_body["quantity_Product_Movement"],
                                            type_Movement=request_body["type_Movement"],
                                            date_Movement=request_body["date_Movement"])
    print(request_body)
    db.session.add(movement_inventory)
    db.session.commit()
    return jsonify("All good"), 200

#------------------------------------------------------------------------------------------------------------------------------