import { Link } from "react-router-dom";

/* A router <Link>, not a window.location assignment: the site is served under
   a HashRouter, so navigating to "/" forced a full page reload. */
export default function BackButton() {
    return (
        <Link
            to="/"
            className="inline-block rounded-lg px-3 py-2 text-sm outline-2 outline-offset-2 outline-neutral-400 hover:outline-neutral-800"
        >
            Back
        </Link>
    )
}
