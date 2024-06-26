/** @format */

import ChickenTaco from "../../assets/img/chicken.jpg"
import grick_taco from "../../assets/img/grick_taco.png"
import Taco from "../../assets/img/taco1.jpg"
//burito

import BeefRollUp from "../../assets/img/BeefRollUp.jpg"
import BurritoVega from "../../assets/img/BurritoVega.jpg"
import rollUpDoubleChease from "../../assets/img/rollUpDubleChese.jpg"

//kesal
import BeefKesal from "../../assets/img/beefKesal.png"
import ChickenKesal from "../../assets/img/chickeKesal.png"
import ChickenKesalBBQ from "../../assets/img/chikenKesalBBQ.png"

// nachos

import guacovole from "../../assets/img/guacavole.png"
import nachos from "../../assets/img/nachos.png"
import nachosChili from "../../assets/img/nachosChili.png"

// soysauce
import halopeno from "../../assets/img/halopeno.png"
import pico from "../../assets/img/pico.png"
import salsa from "../../assets/img/soas_salsa.png"

export const tacosData = [
	{
		id: "100",
		title: "Тако",
		tacoCategory: [
			{
				id: "1",
				img: Taco,
				title: "Хрустящее тако",
				measure: "250г",
				quantity: 0,
				price: 350,
				description:
					"Пшеничная тортилья, мраморная говядина, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «Тако», зелёный салат, сыр «Чеддер». ",
			},
			{
				id: "2",
				img: ChickenTaco,
				title: "Чикен тако",
				measure: "250г",
				quantity: 0,
				price: 522,
				description:
					' Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
			},
			{
				id: "3",
				img: grick_taco,
				title: "Грик тако",
				measure: "250г",
				quantity: 0,
				price: 200,
				description:
					" Пшеничная тортилья, курица, помидоры, специи (лук, чеснок, кумин, кориандр, куркума, сахар, яблоко, тамаринд), соус «Тако», зелёный салат, сыр «Фета», сыр «Пармезан». ",
			},
		],
	},
	{
		id: "200",
		title: "Буррито",
		tacoCategory: [
			{
				id: "4",
				img: rollUpDoubleChease,
				title: "Ролл-ап Дабл-чиз (веге)",
				measure: "250г",
				quantity: 0,
				price: 250,
				description: "Пшеничная тортилья, соус “Чипотле”, микс сыров. ",
			},
			{
				id: "5",
				img: BurritoVega,
				title: "Буррито Вега с гуакамоле (веге)",
				measure: "250г",
				quantity: 0,
				price: 250,
				description:
					"Пшеничная тортилья, фасолевая паста, рис, соус “Гуакамоле”, соус “Чипотле”, микс сыров.",
			},
			{
				id: "6",
				img: BeefRollUp,
				title: "Биф ролл-ап",
				measure: "250г",
				quantity: 0,
				price: 250,
				description:
					'Пшеничная тортилья, фарш говяжий, соус "Сальса”, микс сыров. ',
			},
		],
	},
	{
		id: "300",
		title: "Кесадильи",
		tacoCategory: [
			{
				id: "7",
				img: ChickenKesalBBQ,
				title: "Чикен кесадилья BBQ",
				measure: "365г",
				quantity: 0,
				price: 689,
				description:
					'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», сыр "Чеддер", сыр "Queso blanco".',
			},
			{
				id: "8",
				img: ChickenKesal,
				title: "Чикен кесадилья",
				measure: "350г",
				quantity: 0,
				price: 650,
				description:
					'Пшеничная тортилья, курица, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «BBQ», "Чеддер",сыр "Queso blanco". ',
			},
			{
				id: "9",
				img: BeefKesal,
				title: "Биф кесадилья",
				measure: "350г",
				quantity: 0,
				price: 650,
				description:
					"Пшеничная тортилья, мраморная говядина, помидоры, кукуруза, сладкий перец, специи (лук, кумин, чеснок, ростки картофеля, орегано, паприка), соус «Тако», соус «Сальса», сыр «Чеддермикс».",
			},
		],
	},
	{
		id: "400",
		title: "Начос",
		tacoCategory: [
			{
				id: "10",
				img: nachos,
				title: "Начос с соусами 'Сырный' и 'Острый чили'",
				measure: "250г",
				quantity: 0,
				price: 250,
				description:
					"Кукурузные чипсы начос, соус «Сырный», соус «Острый чили». ",
			},
			{
				id: "11",
				img: guacovole,
				title: "Начос с соусами Гуакамоле  и Острый чили",
				measure: "250г",
				quantity: 0,
				price: 250,
				description:
					"Кукурузные чипсы начос, соус «Гуакамоле», соус «Острый чили».",
			},
			{
				id: "12",

				img: nachosChili,

				title: 'Начос с соусами "Сальса" и "Острый Чили"',
				measure: "250г",
				quantity: 0,
				price: 250,
				description:
					"Кукурузные чипсы начос, соус «Сальса», соус «Острый Чили».",
			},
		],
	},
	{
		id: "500",
		title: "Соусы",
		tacoCategory: [
			{
				id: "13",
				img: pico,
				title: "Пико де Гайо'",
				measure: "250г",
				quantity: 0,
				price: 250,
				description:
					"Красный лук, помидоры, сок лайма, кинза, петрушка, болгарский перец, перец халапеньо, чеснок, соль, черный перец. ",
			},
			{
				id: "14",
				img: halopeno,
				title: "Халапеньо",
				measure: "250г",
				quantity: 0,
				price: 250,
				description: "Халапеньо. ",
			},
			{
				id: "15",

				img: salsa,

				title: 'Соус «Сальса»о"',
				measure: "250г",
				quantity: 0,
				price: 250,
				description: "Соус «Сальса»",
			},
		],
	},
]
