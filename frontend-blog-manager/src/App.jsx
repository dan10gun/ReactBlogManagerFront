import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AllBlogs } from "./pages/AllBlogs";
import { PersonalBlogs } from "./pages/PersonalBlogs";
import { FavouriteBlogs } from "./pages/FavouriteBlogs";
import SidebarNav from "./components/sidebar";
import { RequestProvider } from "./components/RequestContext";
import { BlogDetail } from './pages/BlogDetail';
import Login from './pages/Login';

function App() {
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
    },
    content: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#ffffff',
    },
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<Navigate to="/AllBlogs" replace />} />

        <Route
          path="*"
          element={
            <div style={styles.container}>
              <SidebarNav />
              <div style={styles.content}>
                <RequestProvider>
                  <Routes>
                    <Route path="/AllBlogs" element={<AllBlogs />} />
                    <Route path="/PersonalBlogs" element={<PersonalBlogs />} />
                    <Route path="/FavouriteBlogs" element={<FavouriteBlogs />} />
                    <Route path="/BlogDetail" element={<BlogDetail />} />
                  </Routes>
                </RequestProvider>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;