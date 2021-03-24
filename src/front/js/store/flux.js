const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			providers: null,
			datosUpdate: null,
			category: null,
			products: [
				{
					id_Product: "1",
					name_Product: "Vino tinto",
					id_Category: "Bebida",
					id_Provider: "1A",
					provider: "Mucho vino tinto",
					cantidad: "3"
				},
				{
					id_Product: "2",
					name_Product: "Vino blanco",
					id_Category: "Bebida",
					id_Provider: "1A",
					provider: "Mucho vino tinto",
					cantidad: "9"
				},
				{
					id_Product: "3",
					name_Product: "Vino tinto suave",
					id_Category: "Bebida",
					id_Provider: "1B",
					provider: "Distribuidora de vinos",
					cantidad: "20"
				},
				{
					id_Product: "4",
					name_Product: "Vino tinto amargo",
					id_Category: "Bebida",
					id_Provider: "1B",
					provider: "Distribuidora de vinos",
					cantidad: "14"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			//-----------------------------------Category------------------------------------------------------------------------

			loadCategory: () => {
				fetch("https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/category")
					.then(response => response.json())
					.then(response => setStore({ category: response }));
			},
			insertCategory: data => {
				fetch("https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/category", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
						setStore({ category: getStore().category, data });
					})
					.then(() => {
						getActions().loadCategory();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			updateCategory: data => {
				fetch(
					"https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/categoryUpdate/" + data.id_Category,

					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.then(() => {
						getActions().loadCategory();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			eliminateCategory: data => {
				console.log(data);
				fetch(
					"https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/categoryEliminate/" + data.id_Category,

					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.then(() => {
						getActions().loadCategory();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			//-----------------------------------Provider------------------------------------------------------------------------
			insertData: data => {
				fetch(
					"https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/provider",

					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
						setStore({ providers: getStore().providers, data });
					})
					.then(() => {
						getActions().loadProviders();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			loadProviders: () => {
				fetch("https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/provider")
					.then(response => response.json())
					.then(response => setStore({ providers: response }));
			},

			updateProvider: data => {
				fetch(
					"https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/providerUpdate/" + data.id_Provider,

					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.then(() => {
						getActions().loadProviders();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			eliminateProvider: data => {
				console.log(data);
				fetch(
					"https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/providerEliminate/" + data.id_Provider,

					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
					})
					.then(() => {
						getActions().loadProviders();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			//--------------------------------------------Users---------------------------------------------------------------
			insertUserdata: data => {
				console.log(data);
				fetch(
					"https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/user",

					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
						setStore({ providers: data });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			insertLogindata: data => {
				console.log(data);
				fetch(
					"https://3001-teal-tortoise-5hgr6djn.ws-us03.gitpod.io/api/login",

					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
						setStore({ providers: data });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			//Sección de funciones para página de reportes
			// Filtra productos por proveedor para reporte
			filterByProvider: provider_id => {
				const filterProducts = getStore().products.filter(item => {
					return item.id_Provider === provider_id;
				});
			}
		}
	};
};

export default getState;
