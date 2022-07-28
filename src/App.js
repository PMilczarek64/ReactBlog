import Home from "./pages/Home";
import About from "./pages/About";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import NotFound from "./pages/NotFound";
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "./views/Header";
import Footer from "./views/Footer";
import SinglePost from "./pages/SinglePost";
import Categories from "./pages/Categories";
import PostsByCategories from "./pages/PostsByCategories";


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/post/edit/:postId" element={<EditPost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/categories" element={< Categories />} />
        <Route
            path="/categories/:category"
            element={<PostsByCategories />}
          />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
