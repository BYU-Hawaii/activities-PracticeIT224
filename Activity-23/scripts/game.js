document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const player = {
        x: canvas.width / 2 - 15,
        y: canvas.height - 60,
        width: 30,
        height: 60,
        img: new Image(),
        dx: 5
    };
    player.img.src = "images/laban-1.png";

    let fallingObjects = [];
    const fallingObjectSize = 45; 
    let fallingObjectSpeed = 3;
    let gameOver = false;
    let score = 0;
    let fallingInterval = 1000;

    function drawPlayer() {
        ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
    }

    function createFallingObject() {
        const x = Math.random() * (canvas.width - fallingObjectSize);
        const object = {
            x,
            y: 0,
            width: fallingObjectSize,
            height: fallingObjectSize,
            img: new Image()
        };
        object.img.src = "images/sword-1.png";
        fallingObjects.push(object);
    }

    function drawFallingObjects() {
        fallingObjects.forEach(object => {
            ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        });
    }

    function updateFallingObjects() {
        fallingObjects.forEach(object => {
            object.y += fallingObjectSpeed;
        });
    }

    function detectCollision(rect1, rect2) {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    function updateGame() {
        if (gameOver) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawPlayer();
        drawFallingObjects();
        updateFallingObjects();

        fallingObjects.forEach(object => {
            if (detectCollision(player, object)) {
                gameOver = true;
                alert("Game Over! You got hit.");
                document.location.reload();
            }
        });

        fallingObjects = fallingObjects.filter(object => {
            if (object.y >= canvas.height) {
                score++;
                document.getElementById("score").textContent = `Score: ${score}`;
                return false;
            }
            return true;
        });

        requestAnimationFrame(updateGame);
    }

    function movePlayer(e) {
        if (e.key === "ArrowLeft" && player.x > 0) {
            player.x -= player.dx;
        } else if (e.key === "ArrowRight" && player.x + player.width < canvas.width) {
            player.x += player.dx;
        }
    }

    function increaseDifficulty() {
        fallingObjectSpeed += 1;
        if (fallingInterval > 200) {
            fallingInterval -= 100;
            clearInterval(fallingObjectInterval);
            fallingObjectInterval = setInterval(createFallingObject, fallingInterval);
        }
    }

    document.addEventListener("keydown", movePlayer);
    let fallingObjectInterval = setInterval(createFallingObject, fallingInterval);
    setInterval(increaseDifficulty, 60000); 
    updateGame();
});
