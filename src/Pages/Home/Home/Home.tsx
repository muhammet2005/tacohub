/** @format */

import React, { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import CardModal from "../../../components/CardModal/CardModal"
import { actionTypeKeys } from "../../../Redux/actionTypes/actionTypes"
import { IState, ITaco, ITacos } from "../../../Redux/actionTypes/types"
import "./Home.scss"

const TacoGallery: React.FC = () => {
	const tacos = useSelector((state: IState) => state.tacos)
	const cart = useSelector((state: IState) => state.cart)
	const showCard = useSelector((state: IState) => state.showModal)
	const [activeTaco, setActiveTaco] = useState<string | null>(null)
	const [itemIdToModal, setItemIdToModal] = useState<ITaco>()
	const dispatch = useDispatch()

	const getQuantity = (id: string) => {
		const item = cart.find(el => el.id === id)
		return item ? item.quantity : 0
	}

	const handleShowCard = (e: ITaco) => {
		setItemIdToModal(e)
		if (e) {
			dispatch({
				type: actionTypeKeys.TOGGLE_MODAL,
			})
		}
	}

	const handleAddToCart = (e: ITaco) => {
		dispatch({
			type: actionTypeKeys.ADD_TO_CART,
			payload: e,
		})
	}

	const handleRemoveFromCart = (e: ITaco) => {
		dispatch({
			type: actionTypeKeys.REMOVE_FROM_CART,
			payload: e,
		})
	}

	const handleToggleCart = () => {
		dispatch({
			type: actionTypeKeys.TOGGLE_CART,
		})
	}

	const totalSum = cart.reduce((acc: number, item: ITaco) => {
		return acc + item.price * item.quantity
	}, 0)
	return (
		<div className="container">
			<div className="menu">
				<div className="left__menu">
					<div className="categories__wrap">
						<div className="menu__head">Меню</div>
						{tacos.map(taco => (
							<div className="left__menu__category" key={taco.id}>
								<a href={`#${taco.id}`}>
									<button
										className={`name ${
											activeTaco === taco.id ? "active-button" : ""
										}`}
										onClick={() => setActiveTaco(taco.id)}
									>
										{taco.title}
									</button>
								</a>
							</div>
						))}
					</div>
				</div>
				<div className="products__content">
					{tacos.map((taco: ITacos) => (
						<div key={taco.id} id={taco.id} className="products__item">
							<div className="category__head">
								<h1>{taco.title}</h1>
							</div>
							<div className="products">
								{taco.tacoCategory.map((item: ITaco, index: number) => (
									<div className="product__item__wrap" key={index}>
										<div className="product__content">
											<div className="product__img__container">
												<img
													rel="preload"
													src={item.img}
													alt={`Сүрөт ${index + 1}`}
													onClick={() => handleShowCard(item)}
												/>
											</div>

											<div className="product__info">
												<div className="product__name">
													<h4 className="name">{item.title}</h4>
													<h6 className="weight">{item.measure}</h6>
												</div>
												<hr />

												<div className="product__bottom">
													<div className="product__price">
														<p>{item.price} сом</p>
													</div>
													<div className="product_change">
														<button
															onClick={() => handleRemoveFromCart(item)}
															className={
																getQuantity(item.id) > 0
																	? "minus_hide"
																	: "minus"
															}
														>
															-
														</button>
														<span className="count">
															{getQuantity(item.id)}
														</span>
														<button
															className="plus"
															onClick={() => {
																handleAddToCart(item)
															}}
														>
															+
														</button>
													</div>
												</div>
											</div>

											<div className="product__description">
												<p>{item.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div
				className={cart.length > 0 ? "order" : "order_hide"}
				onClick={handleToggleCart}
			>
				<FaShoppingCart /> В корзинy{" "}
				{itemIdToModal && getQuantity(itemIdToModal!.id)}
				{totalSum > 0 && <h5>{(totalSum - totalSum * 0.1).toFixed(0)} сом</h5>}
			</div>
			{showCard && <CardModal taco={itemIdToModal!} />}
		</div>
	)
}

export default TacoGallery
