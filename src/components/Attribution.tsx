export function Attribution() {
  return (
    <details>
      <summary className="text-center small text-muted">
        Show attribution
      </summary>

      <p>Made with:</p>
      <ul>
        <li>
          <a href="https://react.dev/">React with Vite</a>
        </li>
        <li>
          <a href="https://github.com/sqlite/sqlite-wasm">SQLite WASM</a>
        </li>
        <li>
          <a href="https://getbootstrap.com/">Bootstrap</a>
        </li>
        <li>
          <a href="https://twemoji.twitter.com/">Chequered flag from twemoji</a>
        </li>
      </ul>

      <p>
        The{" "}
        <a href="https://www.reachthefinals.com/leaderboard">
          original leaderboard
        </a>{" "}
        was probably done in haste, as it loads a JSON file with a whopping
        10,000 entries. After that, all filtering was done client side, most
        likely iterating over the 10,000 items. Performance was{" "}
        <em>horrible</em> to say the least.
      </p>

      <p>So hey, why not try to do better?</p>

      <p>
        For old times sake with classic React experience, I went with React and
        Vite.
      </p>

      <p>
        For experimenting a little, I offloaded most of the heavy work to a{" "}
        <code>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker">
            SharedWorker
          </a>
        </code>
        . Inside, I used <code>fetch</code> to retrieve the JSON file, and
        loaded the data into{" "}
        <a href="https://github.com/sqlite/sqlite-wasm">SQLite WASM</a>. After
        that, it is all database SQL magic.
      </p>

      <p>
        For an even <strong>better</strong> leaderboard for THE FINALS, consider{" "}
        <a href="https://github.com/leonlarsson/the-finals-leaderboard">
          leonlarsson/the-finals-leaderboard
        </a>
        , which served a lot as reference from the API standpoint.
      </p>
    </details>
  );
}
