import { useState, useEffect } from "react";
import { Styled_Home_top } from "./styles";
import { Styled_Search_div } from "./styles";
import { Styled_Home_top_content } from "./styles";
import { Styled_Filter_div } from "./styles";

function Home_Top() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [SelectedState, setSelectedState] = useState("");
  const [SelectedCity, setSelectedCity] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
    )
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  useEffect(() => {
    if (!SelectedState) return;
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${SelectedState}/municipios?orderBy=nome`,
    )
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, [SelectedState]);

  const handleConfirm = () => {
    setShowModal(false);
  };
  return (
    <Styled_Home_top>
      <Styled_Home_top_content>
        <h1>
          Find what you need
          <br />
          or <span style={{ color: "#FD2D2D" }}>advertise for free!</span>
        </h1>
        <Styled_Search_div>
          <input type="text" placeholder="What are you searching for?" />
          <select placeholder="Category">
            <option value="">All Categories</option>
          </select>
          <button>
            <i class="bx bx-search"></i>
          </button>
        </Styled_Search_div>
        <Styled_Filter_div>
          <i class="bx bx-map"></i>
          <div id="text_box">
            <p id="your_loc">Your location</p>
            <p id="loc">{SelectedCity}</p>
          </div>
          <button onClick={() => setShowModal(true)}>Change</button>
        </Styled_Filter_div>

        {showModal && (
          <div
            style={{
              background: "transparent",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "10px",
              
            }}
          >
            <select
              onChange={(e) => setSelectedState(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Select the state
              </option>
              {states.map((estado) => (
                <option key={estado.id} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setSelectedCity(e.target.value)}
              defaultValue=""
              disabled={!SelectedState}
            >
              <option value="" disabled>
                Select the city
              </option>
              {cities.map((cidade) => (
                <option key={cidade.id} value={cidade.nome}>
                  {cidade.nome}
                </option>
              ))}
            </select>
            <button className="small_btn" onClick={handleConfirm}>Confirmar</button>
          </div>
        )}
      </Styled_Home_top_content>
    </Styled_Home_top>
  );
}

export default Home_Top;
