import { purchasesCollection, usersCollection } from '../database.js';

export async function FinalizePurchase(req, res) {
    const id = res.locals.session?.userId;
    try {
        const {shoppingCart} = await usersCollection
            .findOne({ _id: id })
        const totalPrice = shoppingCart.reduce((a,produto)=>a+=Number(produto.price),0)
        const result = await purchasesCollection.insertOne({userId:id,shoppingCart,totalPrice})
        if (result.modifiedCount === 0) return res.status(409).send("Sua compra não pode ser finalizada...");
        res.status(201).send("Compra finalizada com sucesso!");
    } catch (err) {
        return res.status(500).send(err.message);
    }
}