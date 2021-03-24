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
			products: null
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
				fetch("https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/category")
					.then(response => response.json())
					.then(response => setStore({ category: response }));
			},
			insertCategory: data => {
				fetch("https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/category", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
						setStore({ category: data });
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			//-----------------------------------Provider------------------------------------------------------------------------
			insertData: data => {
				fetch(
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/provider",

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
				fetch("https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/provider")
					.then(response => response.json())
					.then(response => setStore({ providers: response }));
			},

			updateProvider: data => {
				fetch(
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/providerUpdate/" + data.id_Provider,

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
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/providerEliminate/" +
						data.id_Provider,

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
				/*fetch(
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/user",

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
					});*/
			},
			insertLogindata: data => {
				console.log(data);
				fetch(
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/login",

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
			// ---------------------------------Products-----------------------------------------------------------------------------
			loadProducts: () => {
				fetch("https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/product")
					.then(response => response.json())
					.then(response => setStore({ products: response }));
			},
			insertProducts: data => {
				console.log(data);
				fetch(
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/product",

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
						setStore({ products: getStore().products, data });
					})
					.then(() => {
						getActions().loadProducts();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			updateProduct: data => {
				fetch(
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/productUpdate/" + data.id_Product,

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
						getActions().loadProducts();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			eliminateProduct: data => {
				console.log(data);
				fetch(
					"https://3001-scarlet-bandicoot-4bozzmn7.ws-us03.gitpod.io/api/productEliminate/" + data.id_Product,

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
