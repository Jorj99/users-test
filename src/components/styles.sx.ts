const sxStyles = {
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 29px",
    borderBottom: "1px solid #EBEBF0",
  },
  userItemsWrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  userItem: {
    display: "flex",
    padding: "18px 29px",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    flexWrap: "wrap",
    backgroundColor: "var(--pale-slate)",
    transition: "0.3s all ease",
    "&:hover": {
      backgroundColor: "var(--soft-lilac)",
    },
  },
  defaultImage: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    marginRight: "11px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebebf0",
  },
  userName: { display: "inline-block", marginRight: "11px" },
  userEmail: {
    display: "inline-block",
  },
  userItemContent: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    justifyContent: "space-between",
  },
  chip: {
    marginRight: "5px",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  },
};

export default sxStyles;
