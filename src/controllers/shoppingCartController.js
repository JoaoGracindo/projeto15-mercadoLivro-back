import { usersCollection } from '../database.js';

export async function AddToCart(req, res) {
  const user = res.locals.session?.userId;
  const product = req.body;
  try {
    const result = await usersCollection
      .updateOne({ _id: user }, { $push: { shoppingCart: product } });
    if (result.modifiedCount === 0) return res.status(404).send("Esse usuário não está cadastrado!");
    res.status(201).send("Produto adicionado ao carrinho com sucesso!");
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export async function GetCart(req, res) {
  const user = res.locals.session?.userId;
  const cart = await usersCollection.findOne({ _id: user });
  if (!cart) res.status(409).send('usuário não encontrado');
  res.status(200).send(cart.shoppingCart);
}

export async function RemoveFromCart(req, res) {
  const user = res.locals.session?.userId;
  const product = req.body;
  try {
    const result = await usersCollection
      .updateOne({ _id: user }, { $pull: { shoppingCart: {name: product.name} } });
    console.log(result)
    if (result.modifiedCount === 0) return res.status(404).send("Não foi possível remover esse produto do carrinho...");
    res.status(201).send("Produto removido do carrinho com sucesso!");
  } catch (err) {
    return res.status(500).send(err.message);
  }
}