import PropTypes from "prop-types";
import classNames from "classnames";

export default function Logo({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 399.782 189.35"
      width="103.89"
      height="49.178"
      className={classNames({ "a-svg": true, [`${className}`]: !!className })}
    >
      <path
        fill="#0c8b8c"
        d="M62.588 5.575c21.657 0 35.273 9.596 35.273 31.385 0 7.909-3.37 19.578-14.264 26.323l17.896 35.664H83.079c-5.187-10.373-10.117-20.752-15.434-31.126-1.684 0-4.409.133-7.522.133H48.321v30.993h-16.34V5.575zM48.321 53.82h15.952c12.19 0 16.859-9.21 16.859-17.383 0-6.998-4.668-16.726-17.248-16.726H48.321zM129.266 28.136V76.64c0 6.1 2.595 9.47 9.337 9.47 5.837 0 13.616-3.11 20.62-7.004V28.136h15.951v70.811h-13.486l-1.299-7.781h-.518c-9.207 5.575-18.026 9.336-25.937 9.336-12.838 0-20.62-6.485-20.62-20.747V28.136zM192.83 96.482V0h15.953v33.718c7.522-4.412 14.914-7.137 23.214-7.137 13.487 0 25.936 9.729 25.936 35.279 0 29.565-17.377 38.642-37.608 38.642a105.162 105.162 0 01-27.494-4.02zm33.848-55.893c-4.668 0-10.892 1.947-17.895 5.967v39.42a57.58 57.58 0 0011.93 1.302c14.524 0 20.88-7.655 20.88-24.514 0-15.044-5.187-22.175-14.915-22.175zM288.296 18.54h-16.34V2.72h16.34zm-.13 80.407h-15.951v-70.81h15.951zM351.979 98.947V50.444c0-6.094-2.592-9.463-9.466-9.463-5.835 0-13.487 3.237-20.62 7.13v50.836H306.07v-70.81h14.785v7.913h.518c9.078-5.448 18.026-9.469 25.937-9.469 12.838 0 20.49 6.486 20.49 20.88v51.486z"
      />
      <path
        fill="#fff"
        d="M21.988 126.349c15.06 0 21.986 9.21 21.986 25.01 0 15.803-6.925 25.012-21.986 25.012S0 167.161 0 151.36c0-15.8 6.927-25.01 21.988-25.01zm.067 7.328c-8.74 0-13.381 5.513-13.381 17.682 0 12.171 4.64 17.684 13.247 17.684 8.74 0 13.38-5.513 13.38-17.684 0-12.17-4.64-17.682-13.246-17.682zM51.449 174.287v-50.023h8.27v17.482a23.356 23.356 0 0112.036-3.7c6.992 0 13.447 5.044 13.447 18.29 0 15.329-9.01 20.035-19.499 20.035a54.523 54.523 0 01-14.254-2.084zm17.548-28.979c-2.42 0-5.647 1.01-9.278 3.094v20.438a29.853 29.853 0 006.186.675c7.53 0 10.825-3.969 10.825-12.71 0-7.8-2.689-11.497-7.733-11.497zM110.424 164.671c0-3.294-3.495-3.762-8.135-4.503-5.245-.806-11.431-2.556-11.431-10.625 0-8.538 6.455-11.497 15.263-11.497a69.77 69.77 0 0110.825.94l-.269 7.129a64.943 64.943 0 00-9.614-1.01c-5.514 0-7.733 1.278-7.733 4.035 0 3.028 3.094 3.631 7.464 4.303 5.647.944 12.102 2.219 12.102 10.894 0 8-5.244 12.034-15.196 12.034a119.927 119.927 0 01-12.573-.806l.27-7.328a96.568 96.568 0 0011.9 1.144c4.908 0 7.127-1.616 7.127-4.71zM156.69 174.018a47.444 47.444 0 01-14.388 2.353c-11.969 0-18.29-5.915-18.29-19.162 0-12.776 6.523-19.163 17.415-19.163 12.842 0 15.936 8.472 15.936 17.616v3.765h-24.677c.068 7.06 4.304 9.75 11.566 9.75a46.556 46.556 0 0012.438-2.287zm-7.732-20.575c-.067-4.035-1.21-8.875-8.001-8.875-5.58 0-8.405 3.969-8.405 8.875zM186.62 147.19c-4.841.74-8.607 2.422-13.515 4.572v23.803h-8.203v-36.713h7.8v6.188c3.967-2.557 8.136-6.053 13.917-6.388zM199.86 138.852l8.674 27.704h.403l8.674-27.704h8.673l-12.372 36.782h-10.556l-12.236-36.782zM251.776 153.309v-2.757c0-3.362-2.017-5.647-8.001-5.647a49.82 49.82 0 00-12.037 1.681v-6.993a76.065 76.065 0 0113.987-1.547c8.942 0 14.322 4.372 14.322 13.044v24.475h-7.061l-.605-4.1h-.269c-3.967 2.89-8.069 4.572-12.036 4.572-6.253 0-11.43-3.7-11.43-11.366 0-7.06 5.11-11.362 13.716-11.362zm0 5.85h-8.203c-4.505 0-6.59 1.75-6.59 4.909 0 3.428 2.421 5.11 5.784 5.11a16.404 16.404 0 009.01-3.16zM278.88 165.009c0 3.093 2.22 4.034 4.573 4.034a19.853 19.853 0 005.244-.875v7.06a55.817 55.817 0 01-9.413 1.078c-4.572 0-8.674-1.482-8.674-8.472v-21.92h-4.773v-5.112l10.42-10.016h2.691v8.135h11.161v6.994h-11.228zM312.372 138.046c10.086 0 18.489 5.65 18.489 19.163 0 13.515-8.403 19.162-18.49 19.162s-18.423-5.512-18.423-19.162c0-13.582 8.338-19.163 18.424-19.163zm.067 31.266c6.992 0 9.883-4.506 9.883-12.103 0-7.532-2.89-12.035-9.883-12.035-7.06 0-10.02 4.503-10.02 12.035 0 7.597 2.96 12.103 10.02 12.103zM359.85 147.19c-4.84.74-8.606 2.422-13.514 4.572v23.803h-8.204v-36.713h7.8v6.188c3.968-2.557 8.137-6.053 13.918-6.388zM375.105 189.35l4.573-13.785h-3.496q-5.85-18.356-11.833-36.713h9.009c2.824 9.213 5.58 18.56 8.405 27.838h.605c2.89-9.278 5.715-18.625 8.606-27.838h8.808l-16.07 50.498z"
      />
    </svg>
  );
}

Logo.displayName = "SVG.Logo";

Logo.propTypes = {
  className: PropTypes.string,
};