import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import dayjs from 'dayjs';
import { purchases } from '../database/collections.js';
dotenv.config();



export async function sendEmail(mailText, to){
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false, 
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});
	try{
		const info = await transporter.sendMail({
			from: `BoardLand Team < ${process.env.EMAIL} >`,
			to,
			subject: 'Seu pedido na BoardLand foi confirmado!',
			html: mailText
		});
		return info;
	}catch(err){
		return err;
	}
}
export async function emailTemplate(idUser) {
	try {
		const history = await purchases.find({idUser}).sort({_id: -1}).toArray();
		const purchase = history[0];
		return `
			<div style="
					font-family: 'Farro', sans-serif;
				">
			<div style = "
				display: flex;
				align-items : center;
				font-size : 20px;
				max-width : 600px;
				height : 50px;
			"> RELATÓRIO DO PEDIDO [#${purchase._id}] - ${dayjs(Date.now()).format('DD/MM')}</div>
			<table 
			border="1" 
			cellspacing="0" 
			cellpadding="5" 
			width="600"
			border-radius = "5px"
			style="border-collapse: collapse; border-radius: 10px;"
			>
			<tr style="background-color:#3C9ACF; color:#ffffff;">
				<th>Jogo</th>
				<th>Preço</th>
				<th>Total</th>
			</tr>
			${purchase.games.map(({ name, price }) => {
		return `
				<tr>
					<td>${name}</td>
					<td style="text-align: right;">R$ ${price.toFixed(2).replace('.', ',')}</td>
				</tr>
			`;
	}).join('\n')}
				<tr>
					<td></td>
					<td></td>
					<td style="text-align: right;">R$ ${purchase.total.toFixed(2).replace('.', ',')}</td>
				</tr>
			</table>
		</div>
		<style>
		@import url('https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&family=Grandstander:wght@100;200;300;400;500;600;700;800;900&display=swap');
		</style>
			`;
	} catch (error) {
		return error;
	}
	
}