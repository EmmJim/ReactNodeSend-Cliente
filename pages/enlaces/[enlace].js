import Layout from "../../components/Layout";
import clienteAxios from '../../config/axios';

export async function getServerSideProps({params}) {

    const {enlace} = params;

    const resultado = await clienteAxios.get(`api/enlaces/${enlace}`);

    // console.log(resultado);

    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getServerSidePaths() {
    const enlaces = await clienteAxios.get('/api/enlaces');

    return {
        paths: enlaces.data.enlaces.map(enlace => ({
            params: {enlace: enlace.url}
        })),
        fallback: false
    }
}

export default ({enlace}) => {

    console.log(enlace);

    return (
        <Layout>
            <h1>Desde [enlace].js</h1>
        </Layout>
    )
}