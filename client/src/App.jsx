import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
      {/* <Navbar></Navbar>
      <Dashboard></Dashboard> */}
      <Menu />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;