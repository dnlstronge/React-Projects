// import the default export and the named export `useState` from the 'react' library

export default function ColorPicker() {
    // call useState and assign its return values to `color` and `setColor`
  
   const divStyle = {backgroundColor: 'purple'};
  
    return (
      <div style={divStyle}>
        <p>The color is {color}</p>
        <button>
          Aquamarine
        </button>
        <button>
          BlueViolet
        </button>
        <button>
          Chartreuse
        </button>
        <button>
          CornflowerBlue
        </button>
      </div>
    );
  }
  