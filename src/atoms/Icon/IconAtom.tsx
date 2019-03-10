import { cx } from "emotion";
import * as React from "react";

import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TYPES = {
  DEFAULT: "DEFAULT",
  REGULAR: "REGULAR",
  LIGHT: "LIGHT",
  BRAND: "BRAND",
};

interface IProps {
  type?: string;
  name: string;
  className?: string;
  size?: any;
}

function camelize(str: string) {
  return str.replace(/\W+(.)/g, (_1, chr) => {
    return chr.toUpperCase();
  });
}

const IconAtom = (
  props: IProps = {
    type: "REGULAR",
    name: "",
    className: "",
    size: "",
  },
) => {
  let faIconType;

  switch (props.type) {
    case TYPES.REGULAR:
      faIconType = "foawer";
      break;
    case TYPES.LIGHT:
      faIconType = "foawel";
      break;
    case TYPES.DEFAULT:
    default:
      faIconType = "foawe";
  }

  return (
    <FontAwesomeIcon
      icon={
        faIcon[
          "fa" + camelize(props.name[0].toUpperCase() + props.name.slice(1))
        ]
      }
      size={props.size}
      className={cx(`${faIconType} fa-${props.name}`, props.className)}
    />
  );
};

IconAtom.displayName = "IconAtom";

export { IconAtom };
