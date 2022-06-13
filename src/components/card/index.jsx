import React, { useState, useContext } from "react";
import { CardContext } from "../../context/context";
import bed from "../../assets/icons/bed.svg";
import bath from "../../assets/icons/bath.svg";
import garage from "../../assets/icons/garage.svg";
import ruller from "../../assets/icons/ruller.svg";
import vektor from "../../assets/icons/vektor.svg";
import like from "../../assets/icons/like.svg";
import { CardStyled, Button, Input, TitleInput } from "./style";

export const Card = (props) => {
  const [state, setState] = useContext(CardContext);
  const [changing, setchanging] = useState(true);
  const [selected, setSelected] = useState(props.data);
  const onChange = ({ target }) => {
    setchanging(false);
    const { name, value } = target;
    setSelected({ [name]: value });
  };
  const [isDisebled, setIsDisebled] = useState(true);
  const onEdit = () => {
    setIsDisebled(false);
  };
  const onSave = () => {
    setIsDisebled(true);
    const res = state.map((item) => {
      return item.id === selected.id ? { ...item, item: selected.id } : item;
    });
    setState(res);
  };
  return (
    <CardStyled>
      <div
        className="card-img"
        style={{
          backgroundImage: `url(https://images.adsttc.com/media/images/5f07/2e0e/b357/6508/3c00/002d/large_jpg/villa_lobos.jpg?1594306057)`,
        }}
      >
        <div className="wrapper img-btns">
          <button className="btn-bg">Featured</button>
          <button className="btn-bg">For Sale</button>
        </div>
        <div className="person-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1LjfqYSej26wdOpma0YZRaBZfVKo3lrqLGObdF8dmJTqPm08x5SsJzICA71dlTtnqCw&usqp=CAU"
            alt="this is person"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="card-title">
          <h3>
            <TitleInput
              name="title"
              value={changing ? props.data.title : selected.title}
              type="large"
              disabled={isDisebled}
              onChange={(e) => onChange(e)}
            />
          </h3>
          <p>
            <TitleInput
              name="comment"
              onChange={(e) => onChange(e)}
              value={changing ? props.data.comment : selected.comment}
              disabled={isDisebled}
            />
          </p>
        </div>
        <div className="card-feature">
          <div>
            <img src={bed} alt="" />
            <p>
              <Input
                name="bed"
                value={changing ? props.data.bed : selected.bed}
                disabled={isDisebled}
                onChange={(e) => onChange(e)}
              />{" "}
              Beds
            </p>
          </div>
          <div>
            <img src={bath} alt="" />
            <p>
              <Input
                name="bath"
                value={changing ? props.data.bath : selected.bath}
                disabled={isDisebled}
                onChange={(e) => onChange(e)}
              />{" "}
              Baths
            </p>
          </div>
          <div>
            <img src={garage} alt="" />
            <p>
              <Input
                name="garage"
                value={changing ? props.data.garage : selected.garage}
                disabled={isDisebled}
                onChange={(e) => onChange(e)}
              />{" "}
              Garage
            </p>
          </div>
          <div>
            <img src={ruller} alt="" />
            <p>
              <Input
                name="field"
                onChange={(e) => onChange(e)}
                value={changing ? props.data.field : selected.field}
                type="large"
                disabled={isDisebled}
              />{" "}
              Sq Ft
            </p>
          </div>
        </div>
        <hr />
        <div className="card-control">
          <div className="card-price">
            <h3>$3200/mo</h3>
            <h3>$8500/mo</h3>
          </div>
          {isDisebled ? (
            <Button onClick={onEdit} type="edit">
              Click
            </Button>
          ) : (
            <Button onClick={onSave}>Save</Button>
          )}
          <div className="card-control-btn">
            <img src={vektor} alt="" />
            <img src={like} alt="" />
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
