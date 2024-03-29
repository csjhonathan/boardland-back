import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import route from './routes/index.routes.js';
import swaggerUi from 'swagger-ui-express';

const swaggerDocs = {
	'openapi': '3.0.0',
	'info': {
		'version': '1.0.0',
		'title': 'BoardLand API',
		'description': 'Esta api está servindo a uma aplicação e-commerce de compra de jogos de tabuleiro!'
	},
	'paths': {
		'/sign-up': {
			'post': {
				'summary': 'Registrar um novo usuário',
				'tags': ['Usuários'],
				'requestBody': {
					'description': 'Dados do usuário a ser registrado',
					'content': {
						'application/json': {
							'schema': {
								'$ref':'#/components/schemas/SignUp'
							}
						}
					}
				},
				'responses': {
					'201': {
						'description': 'Usuário registrado com sucesso'
					},
					'409': {
						'description': 'E-mail já cadastrado'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		},
		'/login': {
			'post': {
				'summary': 'Autenticar um usuário',
				'tags': ['Usuários'],
				'requestBody': {
					'description': 'Dados do usuário para autenticação',
					'content': {
						'application/json': {
							'schema': {
								'$ref':'#/components/schemas/Login'
							}
						}
					}
				},
				'responses': {
					'200': {
						'description': 'Usuário autenticado com sucesso',
						'content': {
							'application/json': {
								'schema': {
									'$ref':'#/components/schemas/AuthenticatedUser'
								}
							}
						}
					},
					'401': {
						'description': 'E-mail não cadastrado ou senha incorreta'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		},
		'/logout': {
			'post': {
				'summary': 'Deslogar um usuário',
				'tags': ['Usuários'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'parameters': [
					{
						'in': 'header',
						'name': 'Authorization',
						'description': 'Token de autenticação',
						'required': true,
						'schema': {
							'type': 'string'
						}
					}
				],
				'responses': {
					'200': {
						'description': 'Usuário deslogado com sucesso'
					},
					'401': {
						'description': 'Token inválido ou não encontrado'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		},
		'/cart': {
			'post': {
				'summary': 'Adiciona itens ao arrinho de compras do usuário',
				'tags': ['Carrinho de Compras'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'requestBody': {
					'description': 'Dados do carrinho de compras a serem atualizados',
					'content': {
						'application/json': {
							'schema': {
								'type': 'object',
								'properties': {
									'cart': {
										'type': 'array',
										'items': {
											'$ref':'#/components/schemas/Game'
										}
									},
									'total': {
										'type': 'number'
									}
								}
							}
						}
					}
				},
				'responses': {
					'201': {
						'description': 'Carrinho de compras criado com sucesso ou atualizado'
					},
					'404': {
						'description': 'Usuário não encontrado'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			},
			'get': {
				'summary': 'Obter carrinho de compras do usuário',
				'tags': ['Carrinho de Compras'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'responses': {
					'200': {
						'description': 'Carrinho de compras do usuário obtido com sucesso',
						'content': {
							'application/json': {
								'schema': {
									'type': 'object',
									'properties': {
										'cart': {
											'type': 'array',
											'items': {
												'$ref':'#/components/schemas/Game'
											}
										},
										'total': {
											'type': 'number'
										}
									}
								}
							}
						}
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			},
			'put': {
				'summary': 'Sincronizar carrinho de compras',
				'tags': ['Carrinho de Compras'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'requestBody': {
					'description': 'Dados para sincronizar o carrinho de compras',
					'content': {
						'application/json': {
							'schema': {
								'type': 'object',
								'properties': {
									'cartId': {
										'type': 'string'
									},
									'synchronizedCart': {
										'type': 'array',
										'items': {
											'$ref':'#/components/schemas/Game'
										}
									},
									'total': {
										'type': 'number'
									}
								}
							}
						}
					}
				},
				'responses': {
					'200': {
						'description': 'Carrinho de compras sincronizado com sucesso',
						'content': {
							'application/json': {
								'schema': {
									'type': 'object',
									'properties': {
										'cart': {
											'type': 'array',
											'items': {
												'$ref':'#/components/schemas/Game'
											}
										},
										'total': {
											'type': 'number'
										}
									}
								}
							}
						}
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		},
		'/games': {
			'get': {
				'summary': 'Obter a lista de jogos',
				'tags': ['Jogos'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'responses': {
					'200': {
						'description': 'Lista de jogos obtida com sucesso',
						'content': {
							'application/json': {
								'schema': {
									'type': 'array',
									'items': {
										'$ref': '#/components/schemas/GameInput'
									}
								}
							}
						}
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			},
			'post': {
				'summary': 'Adicionar um novo jogo',
				'tags': ['Jogos'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'requestBody': {
					'description': 'Dados do jogo a ser adicionado',
					'content': {
						'application/json': {
							'schema': {
								'$ref': '#/components/schemas/GameInput'
							}
						}
					}
				},
				'responses': {
					'201': {
						'description': 'Jogo adicionado com sucesso'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		},
		'/games/{ID}': {
			'get': {
				'summary': 'Obter detalhes de um jogo por ID',
				'tags': ['Jogos'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'parameters': [
					{
						'name': 'ID',
						'in': 'path',
						'description': 'ID do jogo',
						'required': true,
						'schema': {
							'type': 'string'
						}
					}
				],
				'responses': {
					'200': {
						'description': 'Detalhes do jogo obtidos com sucesso',
						'content': {
							'application/json': {
								'schema': {
									'$ref': '#/components/schemas/GameInput'
								}
							}
						}
					},
					'404': {
						'description': 'Jogo não encontrado'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		},
		'/history': {
			'get': {
				'summary': 'Obter histórico de compras do usuário',
				'tags': ['Histórico de Compras'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'responses': {
					'200': {
						'description': 'Histórico de compras obtido com sucesso',
						'content': {
							'application/json': {
								'schema': {     
									'$ref': '#/components/schemas/History'
								}
							}
						}
					},
					'401': {
						'description': 'Token de autenticação ausente ou inválido'
					},
					'404': {
						'description': 'Usuário não encontrado'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		},
		'/purchase': {
			'post': {
				'summary': 'Realizar uma nova compra',
				'tags': ['Compras'],
				'security': [
					{
						'bearerAuth': []
					}
				],
				'requestBody': {
					'description': 'Dados da compra a ser realizada',
					'content': {
						'application/json': {
							'schema': {
								'$ref': '#/components/schemas/Purchase'
							}
						}
					}
				},
				'responses': {
					'201': {
						'description': 'Compra realizada com sucesso'
					},
					'404': {
						'description': 'Usuário ou jogo não encontrado'
					},
					'500': {
						'description': 'Erro interno do servidor'
					}
				}
			}
		}
	},
	'components':{
		'schemas':{
			'GameInput': {
				'type': 'object',
				'properties': {
					'name': {
						'type': 'string'
					},
					'image': {
						'type': 'string',
						'format': 'uri'
					},
					'min': {
						'type': 'number'
					},
					'max': {
						'type': 'number'
					},
					'price': {
						'type': 'number'
					},
					'description': {
						'type': 'string'
					}
				},
				'required': ['name', 'image', 'min', 'max', 'price', 'description']
			},
			'Game':{
				'type':'object',
				'properties':{
					'id':{
						'type':'string'
					},
					'name':{
						'type':'string'
					},
					'image':{
						'type':'string'
					},
					'price':{
						'type':'number'
					}
				}
			},
			'SignUp':{
				'type':'object',
				'properties':{
					'name':{
						'type':'string'
					},
					'email':{
						'type':'string'
					},
					'address':{
						'type':'string'
					},
					'image':{
						'type':'string'
					},
					'password':{
						'type':'string'
					}
				}
			},
			'Login':{
				'type':'object',
				'properties':{
					'email':{
						'type':'string'
					},
					'password':{
						'type':'string'
					},
					'check':{
						'type':'boolean'
					}
				}
			},
			'AuthenticatedUser':{
				'type':'object',
				'properties':{
					'idUser':{
						'type':'string'
					},
					'name':{
						'type':'string'
					},
					'email':{
						'type':'string'
					},
					'address':{
						'type':'string'
					},
					'image':{
						'type':'string'
					},
					'token': {
						'type': 'string'
					}
				}
			},
			'History': {
				'type': 'array',
				'items': {
					'type': 'object',
					'properties': {
						'creditCard': {
							'type': 'object',
							'properties': {
								'name': {
									'type': 'string'
								},
								'number': {
									'type': 'string'
								},
								'date': {
									'type': 'string'
								}
							}
						},
						'games': {
							'type': 'array',
							'items': {
								'type': 'object',
								'properties': {
									'id': {
										'type': 'string'
									},
									'name': {
										'type': 'string'
									},
									'price': {
										'type': 'number'
									}
								}
							}
						},
						'idUser': {
							'type': 'string'
						},
						'total': {
							'type': 'number'
						},
						'_id': {
							'type': 'string'
						}
					},
					'required': ['creditCard', 'games', 'idUser', 'total', '_id']
				}
			},
			'Purchase': {
				'type': 'object',
				'properties': {
					'games': {
						'type': 'array',
						'items': {
							'type': 'object',
							'properties': {
								'id': {
									'type': 'string'
								},
								'name': {
									'type': 'string'
								},
								'price': {
									'type': 'number'
								}
							},
							'required': ['id', 'name', 'price']
						}
					},
					'total': {
						'type': 'number'
					},
					'creditCard': {
						'type': 'object',
						'properties': {
							'number': {
								'type': 'string'
							},
							'name': {
								'type': 'string'
							},
							'cvv': {
								'type': 'string'
							},
							'validate': {
								'type': 'string'
							}
						},
						'required': ['number', 'name', 'cvv', 'validate']
					}
				},
				'required': ['games', 'total', 'creditCard']
			}
		}
	}
};


dotenv.config();
const app = express();

app 
	.use(cors())
	.use(express.json())
	.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
	.use(route);

const port = process.env.PORT || 5000;

app.listen( port , () => {
	console.log( `Server is running on ${chalk.green( `http://localhost:${port}` )}` );
} );