import Layout from "../components/Layout";
import { Prices } from "../components/Prices";

const Index = ({ bpi }) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current bicoin rate</p>
      <Prices bpi={bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
