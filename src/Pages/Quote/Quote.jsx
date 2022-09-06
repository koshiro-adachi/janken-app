/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
export const Quote = () => {
  return (
    <>
      <div
        css={css`
          position: relative;
        `}
      >
        <div>
          <button
            css={css`
              margin: 20px 40px;
            `}
          >
            カルテを作成する
          </button>
          <button>フィルターを表示する</button>
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
              border: 1px solid;
              border-color: #706d65;
            `}
          >
            <tbody>
              <tr
                css={css`
                  height: 3rem;
                `}
              >
                <th
                  css={css`
                    min-width: 5rem;
                  `}
                >
                  <input type="checkbox" />
                </th>
                <th
                  css={css`
                    min-width: 6rem;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                    padding-left: 40px;
                  `}
                >
                  商品番号
                </th>
                <th
                  css={css`
                    min-width: 6rem;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                  `}
                >
                  商品画像
                </th>
                <th
                  css={css`
                    min-width: 15rem;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                  `}
                >
                  商品名
                </th>
                <th
                  css={css`
                    min-width: 8rem;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                  `}
                >
                  名称
                </th>
                <th
                  css={css`
                    min-width: 6rem;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                  `}
                >
                  内容量
                </th>
                <th
                  css={css`
                    min-width: 3rem;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                    text-align: right;
                    padding-right: 46px;
                  `}
                >
                  参考小売り価格
                </th>
                <th
                  css={css`
                    min-width: 15rem;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                  `}
                >
                  製造者
                </th>
                <th
                  css={css`
                    min-width: 15rem;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 16px;
                    color: #706d65;
                  `}
                >
                  作成日
                </th>
              </tr>
              <tr
                css={css`
                  height: 3rem;
                `}
              >
                <td
                  css={css`
                    text-align: center;
                  `}
                >
                  <input type="checkbox" />
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                    padding-left: 40px;
                  `}
                >
                  001
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  商品画像
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  ひがしやま（単品）
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  焼菓子
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  1枚
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                    text-align: right;
                    padding-right: 46px;
                  `}
                >
                  200円
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  株式会社四万十ドラマ
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  2022/xx/xx
                </td>
              </tr>
              <tr
                css={css`
                  height: 3rem;
                `}
              >
                <td
                  css={css`
                    text-align: center;
                  `}
                >
                  <input type="checkbox" />
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                    padding-left: 40px;
                  `}
                >
                  002
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  商品画像
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  ひがしやま（4枚入）
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  焼菓子
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  4枚入
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                    text-align: right;
                    padding-right: 46px;
                  `}
                >
                  800円
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  株式会社四万十ドラマ
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  2022/xx/xx
                </td>
              </tr>
              <tr
                css={css`
                  height: 3rem;
                `}
              >
                <td
                  css={css`
                    text-align: center;
                  `}
                >
                  <input type="checkbox" />
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                    padding-left: 40px;
                  `}
                >
                  003
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  商品画像
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  塩キントン
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  栗きんとん
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  1個
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                    text-align: right;
                    padding-right: 46px;
                  `}
                >
                  750円
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  株式会社四万十ドラマ
                </td>
                <td
                  css={css`
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    color: #23221f;
                  `}
                >
                  2022/xx/xx
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
