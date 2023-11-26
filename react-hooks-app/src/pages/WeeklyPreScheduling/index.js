import {useState} from 'react'
// import { Helmet } from "react-helmet";
import { Select, Form } from "antd";


function WeeklyPreScheduling() {
   const [vendorName , selectedVendorName] = useState();

    const columns = [
        {
          title: "Card Code",
          dataIndex: "cardCode",
          key: "cardCode",
          width: 150,
          sorter: (a, b) =>
            a.cardCode === null ? "" : a.cardCode.localeCompare(b.cardCode)
        },
        {
          title: "Item Name",
          dataIndex: "itemName",
          key: "itemName",
          width: 150,
          sorter: (a, b) =>
            a.itemName === null ? "" : a.itemName.localeCompare(b.itemName)
        },
        {
          title: "Backlogs",
          dataIndex: "cumvalue",
          key: "cumvalue",
          width: 150,
          sorter: (a, b) =>
            a.cumvalue === null ? "" : a.cumvalue.localeCompare(b.cumvalue)
        },
        {
          title: "Card Code",
          dataIndex: "monthOneValue",
          key: "monthOneValue",
          width: 150,
          sorter: (a, b) => {
            const valueA = a.monthOneValue === null ? 0 : parseFloat(a.monthOneValue);
            const valueB = b.monthOneValue === null ? 0 : parseFloat(b.monthOneValue);
            const zeroValueA = valueA < 0 ? 0 : valueA;
            const zeroValueB = valueB < 0 ? 0 : valueB;
            return zeroValueA - zeroValueB;
          }
        },
        {
          title:"Backlogs",
          dataIndex: "monthTwoValue",
          key: "monthTwoValue",
          width: 150,
          sorter: (a, b) =>
            a.monthTwoValue === null
              ? ""
              : a.monthTwoValue.localeCompare(b.monthTwoValue)
        },
        {
          title:"Backlogs",
          dataIndex: "monthThreeValue",
          key: "monthThreeValue",
          width: 150,
          sorter: (a, b) =>
            a.monthThreeValue === null
              ? ""
              : a.monthThreeValue.localeCompare(b.monthThreeValue)
        },
        {
          title:"Backlogs",
          dataIndex: "monthFourValue",
          key: "monthFourValue",
          width: 150,
          sorter: (a, b) =>
            a.monthFourValue === null
              ? ""
              : a.monthFourValue.localeCompare(b.monthFourValue)
        },
        {
          title:"Backlogs",
          dataIndex: "monthFiveValue",
          key: "monthFiveValue",
          width: 150,
          sorter: (a, b) =>
            a.monthFiveValue === null
              ? ""
              : a.monthFiveValue.localeCompare(b.monthFiveValue)
        },
        {
          title:"Backlogs",
          dataIndex: "monthsixValue",
          key: "monthsixValue",
          width: 150,
          sorter: (a, b) =>
            a.monthsixValue === null
              ? ""
              : a.monthsixValue.localeCompare(b.monthsixValue)
        }
      ];
    return (
        <div>
            WeeklyPreScheduling
            <div>
      {/* <Helmet title="Forecast Report" /> */}
      
        <div style={{ marginTop: "10px" }}>
          <Form.Item label="Vendor Name" name="vendor">
            <Select
              onChange={selectedVendorName}
              placeholder="Please Select"
              // value={vendorValue}
              style={{ marginLeft: "63px", width: "84%", float: "right" }}
              rules={[{ required: true, message: "Please select vendor name" }]}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0 ||
                option.props.value.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
              }
            >
              {/* {VendoeNameDropDown !== undefined && VendoeNameDropDown !== ""
                ? VendoeNameDropDown.map(element => {
                    return (
                      <Option key={element.cardCode} value={element.cardCode}>
                        {element.cardName}
                      </Option>
                    );
                  })
                : ""} */}
            </Select>
          </Form.Item>
        </div>
      
      {/* <div className="pt-2">
        <ForeCastReportView
          reporttitle={title}
          tableColumns={columns}
          reportLoader={isLoading}
          responsedata={
            foreCastRespnData !== null &&
            foreCastRespnData !== undefined &&
            foreCastRespnData.length !== 0
              ? foreCastRespnData.responseData
              : ""
          }
          yscroll={yscroll}
          csvDownloadName="Forecast_Report_"
        />
      </div> */}
    </div>
        </div>
    )
}

export default WeeklyPreScheduling
