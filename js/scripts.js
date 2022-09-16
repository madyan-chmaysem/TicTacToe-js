const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let winner;

if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][0] == "y") {
  winner = "yellow";
} else {
  if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][0] == "r") {
    winner = "red";
  } else {
    if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2] && arr[1][0] == "y") {
      winner = "yellow";
    } else {
      if (
        arr[1][0] == arr[1][1] &&
        arr[1][1] == arr[1][2] &&
        arr[1][0] == "r"
      ) {
        winner = "red";
      } else {
        if (
          arr[2][0] == arr[2][1] &&
          arr[2][1] == arr[2][2] &&
          arr[2][0] == "y"
        ) {
          winner = "yellow";
        }
        if (
          arr[2][0] == arr[2][1] &&
          arr[2][1] == arr[2][2] &&
          arr[2][0] == "r"
        ) {
        }
        if (
          arr[0][0] == arr[1][0] &&
          arr[1][0] == arr[2][0] &&
          arr[0][0] == "y"
        ) {
          winner = "yellow";
        } else {
          if (
            arr[0][1] == arr[1][1] &&
            arr[1][1] == arr[2][1] &&
            arr[0][1] == "y"
          ) {
            winner = "yellow";
          } else {
            if (
              arr[0][2] == arr[1][2] &&
              arr[1][2] == arr[2][2] &&
              arr[0][2] == "y"
            ) {
              winner = "yellow";
            } else {
              if (
                arr[0][0] == arr[1][0] &&
                arr[1][0] == arr[2][0] &&
                arr[0][0] == "r"
              ) {
                winner = "red";
              } else {
                if (
                  arr[0][1] == arr[1][1] &&
                  arr[1][1] == arr[2][1] &&
                  arr[0][1] == "r"
                ) {
                  winner = "red";
                } else {
                  if (
                    arr[0][2] == arr[1][2] &&
                    arr[1][2] == arr[2][2] &&
                    arr[0][2] == "r"
                  ) {
                    winner = "red";
                  } else {
                    if (
                      (arr[0][0] == arr[1][1]) &
                      (arr[1][1] == arr[2][2]) &
                      (arr[0][0] == "y")
                    ) {
                      winner = "yellow";
                    } else {
                      if (
                        (arr[0][0] == arr[1][1]) &
                        (arr[1][1] == arr[2][2]) &
                        (arr[0][0] == "r")
                      ) {
                        winner = "red";
                      } else {
                        if (
                          (arr[0][2] == arr[1][1]) &
                          (arr[1][1] == arr[2][0]) &
                          (arr[1][1] == "y")
                        ) {
                          winner = "yellow";
                        } else {
                          if (
                            (arr[0][2] == arr[1][1]) &
                            (arr[1][1] == arr[2][0]) &
                            (arr[1][1] == "r")
                          ) {
                            winner = "red";
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
