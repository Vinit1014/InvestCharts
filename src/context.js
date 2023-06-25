import React, { useContext, useEffect, useState } from "react";
const url = process.env.REACT_APP_URL;
const urlSearch = process.env.REACT_APP_URL_SEARCH;

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Amazon");
  const [stockData, setStockData] = useState([]);
  const [fullname,setFullname] = useState();
  const [search, setSearch] = useState();
  const [showYearly, setShowYearly] = useState(true);
  const [totalCurrentAssets, setTotalCurrentAssets] = useState(null);
  const [longTermInvestments, setLongTermInvestments] = useState(null);
  const [longTermDebt, setLongTermDebt] = useState(null);
  const [totalCurrentLiabilities, setTotalCurrentLiabilities] = useState(null);
  const [netReceivables, setNetReceivables] = useState(null);
  const [retainedEarnings, setRetainedEarnings] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [showError,setShowError] = useState(false);

  useEffect(() => {
    const balanceSheetStatement = stockData[1];
    setTotalCurrentAssets(
      balanceSheetStatement?.totalCurrentAssets?.raw || null
    );
    setLongTermInvestments(
      balanceSheetStatement?.longTermInvestments?.raw || null
    );
    setLongTermDebt(balanceSheetStatement?.longTermDebt?.raw || null);
    setTotalCurrentLiabilities(
      balanceSheetStatement?.totalCurrentLiabilities?.raw || null
    );
    setNetReceivables(balanceSheetStatement?.netReceivables?.raw || null);
    setRetainedEarnings(balanceSheetStatement?.retainedEarnings?.raw || null);
    console.log(isLoading);
    console.log(stockData);
    console.log(
      totalCurrentAssets,
      longTermInvestments,
      longTermDebt,
      totalCurrentLiabilities,
      netReceivables,
      retainedEarnings
    );
  }, [
    stockData,
    longTermDebt,
    longTermInvestments,
    totalCurrentAssets,
    totalCurrentLiabilities,
    netReceivables,
    retainedEarnings,
    isLoading,
  ]);

  useEffect(() => {
    const getStockData = async (url, options) => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        
        console.log(showYearly);
        if (showYearly === true) {
          // setStockData(data.balanceSheetHistory.balanceSheetStatements);
          const balanceSheetHistory = data.balanceSheetHistory;
          const balanceSheetStatements =
            balanceSheetHistory?.balanceSheetStatements;
          if (balanceSheetStatements) {
            setStockData(balanceSheetStatements);
          } else {
            // setStockData([]);
          }
          setisLoading(false);
        } else {
          setStockData(
            data.balanceSheetHistoryQuarterly.balanceSheetStatements
          );
          setisLoading(false);
        }
      } catch (error) {
        console.log(error);
        
      }
    };

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_KEY_DATA,
        "X-RapidAPI-Host": process.env.REACT_APP_HOST_DATA,
      },
    };
    let timerOut = setTimeout(() => {
      getStockData(url + `symbol=${search}&region=US`, options);
    }, 2000);
    return () => clearTimeout(timerOut);
  }, [query, showYearly, setStockData, isLoading,search]); 

  useEffect(() => {
    const getSearchData = async (urlSearch, options2) => {
      try {
        const res = await fetch(urlSearch, options2);
        const data = await res.json();
        setShowError(false);
        console.log(data);
        setSearch(data.quotes[0].symbol);
        setFullname(data.quotes[0].shortname);
        setisLoading(false);
        setNews(data.news);
      } catch (error) {
        alert("Not available");
        setShowError(true);
      }
    };
    const options2 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_KEY_DATA,
        "X-RapidAPI-Host": process.env.REACT_APP_HOST_DATA,
      },
    };

    let timerOut = setTimeout(() => {
      getSearchData(urlSearch + `q=${query}&region=US`, options2);
      setisLoading(false);
    }, 800);
    return () => clearTimeout(timerOut);
  }, [query,setFullname,setNews,setShowError]);

  useEffect(() => {
    console.log(search);
    console.log(fullname);
    console.log(news);
  }, [search, news,fullname]);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        stockData,
        setStockData,
        showYearly,
        setShowYearly,
        totalCurrentAssets,
        longTermInvestments,
        longTermDebt,
        totalCurrentLiabilities,
        netReceivables,
        retainedEarnings,
        setisLoading,
        isLoading,
        fullname,
        news,
        setNews,
        setSearch,
        setFullname,
        showError
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
