import React from 'react';

import tshirtImage from '../../assets/tshirt.png'

import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'

import { Container, Row, Panel, Column, Gallery, Section, Description  } from './styles';

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>
            <Panel>
                <Column>
                 <Gallery>
                    <img alt ="T-shirt" src ={tshirtImage} />
                 </Gallery>
                <Info />
                </Column>


                <Column>
                <ProductAction />
                <SellerInfo /> 

                <WarrantySection />
                <WarrantySection />
                <WarrantySection />
                </Column>
            </Panel>
        </Container>
    )
}

const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compra garantida com o Lorem Ipsum</p>
                <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">Sem garantia</p>
            </span>
        </div>

        <a href="#">Saiba mais sobre garantia</a>
    </Section>
)

const Info = () => (

    <Description>
        <h2>Descrição</h2>
        
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec metus tortor. Cras vel elit sit amet enim cursus dictum in nec risus. Quisque mattis nibh ut tortor faucibus accumsan. Etiam vel varius leo, eget tristique ante. Praesent imperdiet id mi id porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        <br />
        Itens inclusos <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        - 1x LED <br />
        <br />
        Nam faucibus velit quis suscipit imperdiet. Aliquam congue risus sapien, quis eleifend nisi volutpat a. Mauris turpis felis, facilisis quis elementum et, eleifend in diam. Proin facilisis, ligula at mattis feugiat, felis justo sagittis turpis, efficitur vestibulum nisl sapien ac enim. Maecenas venenatis arcu a magna tristique, vitae rhoncus felis convallis. Fusce mollis, nunc ut aliquam dapibus, nunc mi consectetur lacus, tincidunt congue augue erat nec velit. Cras ut malesuada nisl. Praesent vel tortor iaculis, elementum enim condimentum, cursus purus. Sed sit amet dignissim lorem, nec ultrices enim. Nulla id tincidunt sem. Nam porta lorem id ultricies vestibulum. Integer accumsan rhoncus porttitor. Ut eleifend nunc enim, ut ultrices nisi suscipit nec. Donec vel felis nec mauris malesuada vestibulum.
        </p>
    </Description>

)

export default Product;