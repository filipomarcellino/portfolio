import React from "react";

function StackItem(props) {
  const { stack, theme } = props;
  return <div className="text-golden text-sm text-center px-2 py-1 rounded-lg my-auto bg-gray-600 mr-3">{stack}</div>;
}

export default StackItem;
