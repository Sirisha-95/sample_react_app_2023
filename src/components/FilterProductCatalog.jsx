import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function ProductId({ id, key }) {
    const color = !id.stocked ? 'red' : '';
    return (
        <tr key={key}>
            <td>{id.name}</td>
            <td>{id.price}</td>
        </tr>
    )

}

function ProductCategory({ category, key }) {
    return (
        <tr key={key}>
            <th>{category}</th>

        </tr>
    )
}

function ProductItems({ items, filterText, inStock }) {
    let rows = [];
    let lastCategory;
    items.map((item, i) => {
        if (
            item.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        console.log('stock value', inStock);
        if (inStock && !item.stocked) {
            return;
        }
        if (item.category != lastCategory) {
            lastCategory = item.category;
            rows.push(<ProductCategory category={item.category} key={item.category} />);
        }

        rows.push(<ProductId id={item} key={item.name} />);


    });
    return (
        <tbody>
            {rows}
        </tbody>
    )

}

function SearchStock({ onSearch, filterText, inStock, onStockChange }) {
    return (
        <Row>
            <Col md={4}></Col>
            <Col md="auto">
                <Form.Control
                    type="text"
                    placeholder="Search products..."
                    value={filterText}
                    onChange={(e) => onSearch(e.target.value)}
                />
                <Form.Check
                    custom
                    type='checkbox'
                    checked={inStock}
                    onChange={(e) => onStockChange(e.target.checked)}
                    label='Only show products in stock'
                />
            </Col>
            <Col md={4}></Col>
        </Row>)
}
function ProductTable({ products, onSearch, filterText, onStockChange, inStock }) {

    return (
        <Container>


            <SearchStock onSearch={onSearch} filterText={filterText} inStock={inStock} onStockChange={onStockChange} />
            <br></br>
            <Row>
                <Col md={4}></Col>
                <Col md="auto">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <ProductItems items={PRODUCTS} filterText={filterText} inStock={inStock} />

                    </Table>
                </Col>
                <Col></Col>

            </Row>
        </Container >
    )
}

function FilterProductCatalog() {

    const [filterText, setFilterText] = useState('');
    const [inStock, setStock] = useState(false);

    const filterProduct = (value) => {
        setFilterText(value);
    }

    const filterStock = (value) => {
        setStock(value);
    }
    return (
        <ProductTable products={PRODUCTS} onSearch={filterProduct} filterText={filterText} inStock={inStock} onStockChange={filterStock} />
    )

}

export default FilterProductCatalog;