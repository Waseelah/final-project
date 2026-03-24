import React from "react";

import { BiSolidDollarCircle } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { GoXCircle } from "react-icons/go";
import {Search, Bell, ChevronDown } from "lucide-react";


const Transaction = () => {

    const transactions = [
        {
            type: "Funding Received",
            icon: <BiSolidDollarCircle className="text-green-500" />,
            date: "Feb 10, 2026",
            amount: "$300.00",
            status: "Completed",
        },
        {
            type: "Money Debit",
            icon: <BiSolidDollarCircle className="text-red-500" />,
            date: "March 5, 2026",
            amount: "$300.00",
            status: "Completed",
        },
        {
            type: "Monthly Subscription",
            icon: <IoWifi className="text-yellow-500" />,
            date: "March 2, 2026",
            amount: "$300.00",
            status: "Refunded",
        },
        {
            type: "Utility Bills",
            icon: <FaArrowTrendUp className="text-yellow-500" />,
            date: "March 6, 2026",
            amount: "$300.00",
            status: "Canceled",
        },
        {
            type: "Card Transaction",
            icon: <FaArrowTrendUp className="text-yellow-500" />,
            date: "March 8, 2026",
            amount: "$300.00",
            status: "Completed",

            
            type: "Funding Received",
            icon: <BiSolidDollarCircle className="text-green-500" />,
            date: "Feb 10, 2026",
            amount: "$300.00",
            status: "Completed",
        },
        {
            type: "Money Debit",
            icon: <BiSolidDollarCircle className="text-red-500" />,
            date: "March 5, 2026",
            amount: "$300.00",
            status: "Completed",
        },
        {
            type: "Monthly Subscription",
            icon: <IoWifi className="text-yellow-500" />,
            date: "March 2, 2026",
            amount: "$300.00",
            status: "Refunded",
        },
        {
            type: "Utility Bills",
            icon: <FaArrowTrendUp className="text-yellow-500" />,
            date: "March 6, 2026",
            amount: "$300.00",
            status: "Canceled",
        },
        {
            type: "Card Transaction",
            icon: <FaArrowTrendUp className="text-yellow-500" />,
            date: "March 8, 2026",
            amount: "$300.00",
            status: "Completed",
        },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-700";
            case "Refunded":
                return "bg-yellow-100 text-yellow-700";
            case "Canceled":
                return "bg-red-100 text-red-700";
            default:
                return "";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "Completed":
                return <MdCheckCircle size={14} className="text-green-500" />;
            case "Refunded":
                return <IoMdRefresh size={14} className="text-yellow-500" />;
            case "Canceled":
                return <FaArrowTrendUp size={14} className="text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <section className="min-h-screen bg-gray-50">

          
            <main className="p-6">

                <h1 className="text-2xl font-bold mb-2">Transactions</h1>
                <p className="text-sm text-gray-500 mb-6">
                    Home &gt; Transaction History
                </p>

                <div className="bg-white rounded-xl shadow p-6">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Transaction History</h2>
                         <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                            <a href="transaction">
                            View full History →
                            </a>
                        </button>
                    </div>

                    <div className="grid grid-cols-5 text-sm text-gray-500 pb-3 border-b">
                        <span>Transaction type</span>
                        <span>Date</span>
                        <span>Amount</span>
                        <span>Status</span>
                        <span></span>
                    </div>

                    {transactions.map((tx, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 items-center py-4 border-b last:border-none"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full">
                                    {tx.icon}
                                </div>
                                <span className="text-sm font-medium">{tx.type}</span>
                            </div>

                            <span className="text-sm text-gray-600">
                                {tx.date}
                            </span>

                            <span className="text-sm font-medium">
                                {tx.amount}
                            </span>

                            <span
                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium w-fit ${getStatusStyle(
                                    tx.status
                                )}`}
                            >
                                {getStatusIcon(tx.status)}
                                {tx.status}
                            </span>

                            <button className="text-blue-600 text-sm hover:underline">
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Transaction;