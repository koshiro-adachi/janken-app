/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
export const Quote = () => {
  const tableHeaderStyle = css`
    font-size: 12px;
    font-weight: 700;
    line-height: 1rem;
    color: #706d65;
  `;
  const tableRowStyle = css`
    height: 3rem;
  `;
  const tableDataStyle = css`
    font-weight: 500;
    font-size: 12px;
    line-height: 1rem;
    color: #23221f;
  `;
  const buttonStyle = css`
    margin-left: 3rem;
    font-size: 12px;
  `;
  return (
    <>
      <div>
        <div
          css={css`
            position: sticky;
            height: 4rem;
            display: flex;
            align-items: center;
          `}
        >
          <button css={buttonStyle}>カルテを作成する</button>
          <button css={buttonStyle}>フィルターを表示する</button>
        </div>
        <div
          css={css`
            overflow-x: scroll;
            white-space: nowrap;
          `}
        >
          <table
            rules="rows"
            css={css`
              border: 1px solid #d6d3d0;
            `}
          >
            <tbody>
              <tr css={tableRowStyle}>
                <th
                  css={css`
                    min-width: 5rem;
                  `}
                >
                  <input type="checkbox" />
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 6rem;
                      text-align: left;
                      padding-left: 2.5rem;
                    `,
                  ]}
                >
                  商品番号
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 6rem;
                      text-align: left;
                    `,
                  ]}
                >
                  商品画像
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 15rem;
                      text-align: left;
                    `,
                  ]}
                >
                  商品名
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 8rem;
                      text-align: left;
                    `,
                  ]}
                >
                  名称
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 6rem;
                      text-align: left;
                    `,
                  ]}
                >
                  内容量
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 3rem;
                      text-align: right;
                      padding-right: 3rem;
                    `,
                  ]}
                >
                  参考小売り価格
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 15rem;
                      text-align: left;
                    `,
                  ]}
                >
                  製造者
                </th>
                <th
                  css={[
                    tableHeaderStyle,
                    css`
                      min-width: 15rem;
                      text-align: left;
                    `,
                  ]}
                >
                  作成日
                </th>
              </tr>
              <tr css={tableRowStyle}>
                <td
                  css={css`
                    text-align: center;
                  `}
                >
                  <input type="checkbox" />
                </td>
                <td
                  css={[
                    tableDataStyle,
                    css`
                      padding-left: 2.5rem;
                    `,
                  ]}
                >
                  001
                </td>
                <td css={tableDataStyle}>商品画像</td>
                <td css={tableDataStyle}>ひがしやま（単品）</td>
                <td css={tableDataStyle}>焼菓子</td>
                <td css={tableDataStyle}>1枚</td>
                <td
                  css={[
                    tableDataStyle,
                    css`
                      text-align: right;
                      padding-right: 3rem;
                    `,
                  ]}
                >
                  200円
                </td>
                <td css={tableDataStyle}>株式会社四万十ドラマ</td>
                <td css={tableDataStyle}>2022/xx/xx</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
