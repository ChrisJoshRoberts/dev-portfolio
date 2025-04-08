import { goto } from "$app/navigation";

export default function handleContactClick(): void {
  console.log("clicked");
  goto("/#contact-form")
}