{/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

function ConfiguratorPage() {
  const [processor, setProcessor] = useState(null);
  const [motherboard, setMotherboard] = useState(null);
  const [ram, setRam] = useState(null);
  const [hardDrive, setHardDrive] = useState(null);
  const [graphicsCard, setGraphicsCard] = useState(null);
  const [powerSupply, setPowerSupply] = useState(null);
  const [case, setCase] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await productService.list(category);
        setProcessor(products.filter((p) => p.category === 'Procesadores'));
        setMotherboard(products.filter((p) => p.category === 'Placas base'));
        setRam(products.filter((p) => p.category === 'Memorias RAM'));
        setHardDrive(products.filter((p) => p.category === 'Discos duros'));
        setGraphicsCard(products.filter((p) => p.category === 'Tarjetas gráficas'));
        setPowerSupply(products.filter((p) => p.category === 'Fuentes de alimentación'));
        setCase(products.filter((p) => p.category === 'Cajas'));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Configurator</h1>
      <h2>Procesador</h2>
      <ul>
        {processor.map((product) => (
          <li key={product.id}>
            <button onClick={() => setProcessor(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <h2>Placa base</h2>
      <ul>
        {motherboard.map((product) => (
          <li key={product.id}>
            <button onClick={() => setMotherboard(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <h2>Memoria RAM</h2>
      <ul>
        {ram.map((product) => (
          <li key={product.id}>
            <button onClick={() => setRam(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <h2>Disco duro</h2>
      <ul>
        {hardDrive.map((product) => (
          <li key={product.id}>
            <button onClick={() => setHardDrive(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <h2>Tarjeta gráfica</h2>
      <ul>
        {graphicsCard.map((product) => (
          <li key={product.id}>
            <button onClick={() => setGraphicsCard(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <h2>Fuente de alimentación</h2>
      <ul>
        {powerSupply.map((product) => (
          <li key={product.id}>
            <button onClick={() => setPowerSupply(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <h2>Caja</h2>
      <ul>
        {case.map((product) => (
          <li key={product.id}>
            <button onClick={() => setCase(product)}>{product.name}</button>
          </li>
        ))}
      </ul>
      <h2>Resumen de la configuración</h2>
      <p>Procesador: {processor && processor.name}</p>
      <p>Placa base: {motherboard && motherboard.name}</p>
      <p>Memoria RAM: {ram && ram.name}</p>
      <p>Disco duro: {hardDrive && hardDrive.name}</p>
      <p>Tarjeta gráfica: {graphicsCard && graphicsCard.name}</p>
      <p>Fuente de alimentación: {powerSupply && powerSupply.name}</p>
      <p>Caja: {case && case.name}</p>
    </div>
  );
}

export default ConfiguratorPage;}*/}
