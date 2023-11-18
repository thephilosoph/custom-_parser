module.exports = test =>{

test('42',{
	type: 'program',
	body:[
		{
		type:'ExpressionStatement',
		expression:{
	type:'NumericLiteral',
	value:42,
	},
		},
	],
});

test(`"hello"` , {
	type: 'program',
	body:[
		{
		type:'ExpressionStatement',
		expression:{
	type:'StringLiteral',
	value:'hello',
	},
		},
	],	
});

	test(`'hello'`,{
		type:'program',
	
	body:[
		{
		type:'ExpressionStatement',
		expression:{
	type:'StringLiteral',
	value:'hello',
	},
		},
	],
		});


};
