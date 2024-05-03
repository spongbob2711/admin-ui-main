import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import MyDatatable from "../../components/mydatatable/MyDatatable";

const MyList = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"></Widget>
          <Widget type="order"></Widget>
          <Widget type="earning"></Widget>
          <Widget type="balance"></Widget>
        </div>
        <MyDatatable title="All Data" />
      </div>
    </div>
  );
};

export default MyList;
