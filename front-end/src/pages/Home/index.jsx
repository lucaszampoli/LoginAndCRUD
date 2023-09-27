import { LayoutComponents } from "../../components/LayoutComponents";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const { singOut } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await singOut();
  };

  return (
    <LayoutComponents>
      <form onSubmit={handleSubmit}>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            <span style={{ color: "#fff" }}>Projeto de gestão</span>
          </h1>
          <br />
          <br />
          <p style={{ color: "#f4f4f4" }} className="home-description">
            Aplicativo para realizar o controle de sua loja.
          </p>
          <br />
          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn">
              Sair
            </button>
          </div>

        </div>
      </div>
      </form>
    </LayoutComponents>
  );
};
