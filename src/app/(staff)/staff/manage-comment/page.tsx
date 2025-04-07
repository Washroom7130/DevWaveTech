"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from 'next/link';
import Script from 'next/script';
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { DeleteComment } from "./func";

import { useFormHandler } from "../../../utils/useFormHandler";
import { useAuthorization } from "@/app/utils/checkAuth";
import LoadingOverlay from "@/app/components/loadingOverlay";

type Comment = {
  comment_id: number;
  comment_value: string;
  comment_date: string;
  customer_id: number;
  product_id: number;
}


export default function Manage_Comment() {

const {
    message: deleteMessage,
    isPending: deleteIsPending,
    handleSubmit: handleDeleteSubmit,
} = useFormHandler(DeleteComment);

const [comments, setcomment] = useState<Comment[]>([]);
const [comment_loading, setcommentLoading] = useState(true);
const [comment_error, setcommentError] = useState("");

useEffect(() => {
    async function fetchComment() {
      try {
        const response = await fetch('https://flaskbackendapi.onrender.com/staff/get-comments', {
          // headers: {
          //   "Cookie": `session=${cookie};`
          // }
          credentials: "include"
        });
        if (!response.ok) throw new Error("Failed to fetch customers");
        const data = await response.json();
        setcomment(data);
      } catch (err) {
        setcommentError("Failed to fetch comment");
        if (err instanceof Error) {
          setcommentError("Failed to fetch comment");
        }
      } finally {
        setcommentLoading(false);
      }
    }
    fetchComment();
  }, [])

  if (comment_loading) return <LoadingOverlay/>

  return (
    // <>

    // <h1>Comment List</h1>
    // <table>
    //   <tr>
    //     {comments.map((comment) => (
    //       <><td>{comment.comment_id}</td>
    //       <td>{comment.comment_value}</td>
    //       <td>{comment.comment_date}</td>
    //       <td>{comment.customer_id}</td>
    //       <td>{comment.product_id}</td></>
    //     ))}
    //   </tr>
    // </table>

    // <h1>Delete Comment</h1>
    // <form onSubmit={handleDeleteSubmit}>
    // <label htmlFor="comment_id">Comment ID</label>
    // <input type="number" name="comment_id" />
    // <button type="submit" disabled={deleteIsPending}>
    //         {deleteIsPending? "Processing..." : "Delete"}
    //     </button>
    // </form>
    // {deleteMessage && <p>{deleteMessage}</p>}
    // </>
    <>
    <title>Quản lí đánh giá</title>
      <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
    {/* Navbar: nếu có, copy từ trang mẫu */}
    {/* Begin Page Content */}
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Quản Lý Đánh Giá</h1>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="reviewsTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Số thứ tự</th>
                  <th>Mã đánh giá</th>
                  <th>Ngày đánh giá</th>
                  <th>Bình luận</th>
                  <th>Mã khách hàng</th>
                  <th>Mã sản phẩm</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment, index) => (
                  <tr key={comment.comment_id}>
                    <td>{index +1 }</td>
                    <td>{comment.comment_id}</td>
                    <td>{comment.comment_date}</td>
                    <td>{comment.comment_value}</td>
                    <td>{comment.product_id}</td>
                    <td>{comment.customer_id}</td>
                    <td>
                      <Link href={`/staff/manage-comment/delete-comment?comment_id=${comment.comment_id}`}>
                      <button className="btn btn-danger btn-sm btn-delete">
                        Xoá
                      </button>
                      </Link>
                    </td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* End Page Content */}
  </div>
  {/* Footer: copy footer từ trang mẫu nếu có */}
</div>

    </>
  );
}


