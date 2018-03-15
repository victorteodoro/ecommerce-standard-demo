const flipPagarmeCard = (componentThis) => (
  () => (
    componentThis.setState({
      flipped: !componentThis.state.flipped
    })
  )
);

export default flipPagarmeCard;
