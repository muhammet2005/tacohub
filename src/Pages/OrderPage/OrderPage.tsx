/** @format */

import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import InputMask from "react-input-mask"
import OrderCart from "../../components/OrderCart/OrderCart"
import "./OrderPage.scss"

export function OrderPage() {
	const [dateOptions, setDateOptions] = useState<
		{ label: string; value: string }[]
	>([])
	const [tacosData, setTacosData] = useState<string[]>([])

	console.log("tacosData", tacosData)

	useEffect(() => {
		const today = new Date()
		const options = [{ label: "Сегодня", value: formatDate(today) }]

		for (let i = 1; i <= 7; i++) {
			const nextDay = new Date(today)
			nextDay.setDate(today.getDate() + i)
			options.push({ label: formatDate(nextDay), value: formatDate(nextDay) })
		}

		setDateOptions(options)
	}, [])

	const formatDate = (date: Date) => {
		const day = date.getDate().toString().padStart(2, "0")
		const month = (date.getMonth() + 1).toString().padStart(2, "0")
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget

		// Create an instance of FormData from the form
		const formData = new FormData(form)

		try {
			// Post the form data to the server
			const response = await axios({
				method: "post",
				url: form.action,
				data: formData,
				headers: { "Content-Type": "multipart/form-data" },
			})

			console.log("Form submitted successfully:", response.data)
			// Redirect or handle the successful submission
		} catch (error) {
			console.error("Error submitting form:", error)
			// Handle the error, e.g., show an error message to the user
		}
	}

	return (
		<div className="container">
			<div className="orders">
				<OrderCart setTacosData={setTacosData} />
				<div className="orders_wrap">
					<h1>Форма заказа</h1>
					<form
						action="https://sheetdb.io/api/v1/mhprlykneyavm"
						method="post"
						id="sheetdb-form"
						onSubmit={handleSubmit}
					>
						<InputMask
							name="data[number]"
							mask="'+7(999) 999-99-99"
							type="tel"
							placeholder="'+7(999) 999-99-99"
							required
						/>
						<input
							type="text"
							name="data[address]"
							placeholder="Адрес"
							required
						/>
						<div className="house__details">
							<div>
								<p>Квартира*</p>
								<input
									type="number"
									name="data[flat]"
									placeholder="Квартира"
									required
								/>
							</div>{" "}
							<div>
								<p>Подъезд*</p>{" "}
								<input
									type="number"
									name="data[entrance]"
									placeholder="Подъезд"
									required
								/>
							</div>
							<div>
								<p>Домофон</p>{" "}
								<input
									type="number"
									name="data[intercom]"
									placeholder="Домофон"
								/>{" "}
							</div>
							<div>
								<p>Этаж</p>
								<input type="number" name="data[floor]" placeholder="Этаж" />
							</div>
						</div>
						<div className="order__comment">
							<p>Комментарий к заказу</p>{" "}
							<textarea
								name="data[comment]"
								placeholder="Комментарий"
								rows={3}
								required
							></textarea>
							<input
								type="hidden"
								name="data[tacos]"
								value={tacosData.map(el => el).join(", ")}
								required
							/>
						</div>
						<div className="order__date">
							<h2>Доставка</h2>
							<p>Доступен только предварительный заказ с 10:30</p>
							<p>К времени</p>
							<select name="data[date]" required>
								{dateOptions.map((option, index) => (
									<option key={index} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							<input
								type="time"
								name="data[time]"
								placeholder="Время"
								required
							/>
						</div>

						<select
							className="order__payment__type"
							name="data[payment]"
							required
						>
							<option value="">Выберите способ оплаты</option>
							<option value="card">Картой</option>
							<option value="cash">Наличными</option>
						</select>

						<button type="submit" className="submitbtn">
							Отправить заказ
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
