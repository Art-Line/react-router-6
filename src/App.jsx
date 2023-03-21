import './App.css';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Error from './pages/Error';
import Layout from './components/Layout'
import PostItem from './pages/PostItem';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='posts' element={<Posts />} />
				<Route path='posts/:id' element={<PostItem />} />
				<Route path='contact' element={<Contacts />} />
				<Route path='*' element={<Error />} />
			</Route>
		</Routes>
	);
}

export default App;
