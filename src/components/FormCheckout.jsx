import "../styles/FormCheckout.scss"

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <form className="checkout__form" onSubmit={sendOrder}>
      <label>
        Nombre Completo
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required />
      </label>

      <label>
        Email
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} required />
      </label>

      <label>
        Teléfono
        <input type="tel" name="phone" value={dataForm.phone} onChange={handleChangeInput} required />
      </label>

      <label>
        Dirección
        <input type="text" name="address" value={dataForm.address} onChange={handleChangeInput} required />
      </label>

      <label>
        Método de Pago
        <select name="paymentMethod" value={dataForm.paymentMethod} onChange={handleChangeInput}>
            <option value="otro">Otro</option>
            <option value="mercado_pago">Mercado Pago</option>
            <option value="paypal">Paypal</option>
            <option value="tarjeta_credito">Tarjeta de Crédito</option>
            <option value="tarjeta_debito">Tarjeta de Débito</option>
        </select>
      </label>

      <button type="submit">Comprar</button>
    </form>
  );
};

export default FormCheckout;
