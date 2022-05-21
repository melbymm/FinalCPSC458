import styled from "styled-components"

export default function ItemCard({ item, addToCart }) {

    return <Card>
    <p className="exp-name">{item.name}</p>

    <div className="content">
    <p>{item.title}</p>
    <p className="price">${item.price}</p>
    <p>{item.start.toString()} -  {item.end.toString()}</p>
    <AddToCart onClick={() => addToCart(item)} className={item.stock <= 0 ? 'disabled' : ''}>Add to Cart</AddToCart>
    </div>
        <div className="img-wrapper">
            <img src={item.link} alt={item.name} />
        </div>

    </Card>
}

const Card = styled.article`
    flex: 1;
    overflow: hidden;
    min-width: 300px;
    border-radius: 50px;
    border: 3px;

    .img-wrapper {
        overflow: hidden;
        max-height: 400px;
        min-height: 100%;
    }
    .img-wrapper img {
    display: block;
    overflow: hidden;
    height: 30%;
    width: 100%;
    object-fit: contain;
  }
  .content {
    padding: 20px;
    background-color: white;
    width: 100%;
  }

  .exp-name {
    padding: 0;
    font-size: 5rem;
    margin: 0;

  }

  .price {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
  }
  .p {
    font-size:2rem;
    color: black;
  }
  .img {
    min-height: 100%;
  }

`

const AddToCart = styled.button`
    width: 100%;
    padding: 15px 0;
    color: white;
    font-weight: 800;
    background-color: darkblue;
    border: pink;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        filter: #81b29a;
    }
`
