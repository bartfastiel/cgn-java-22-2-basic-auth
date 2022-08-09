import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class CommandlinePasswordEncoder {
    public static void main(String[] args) {
        System.out.println(new BCryptPasswordEncoder().encode("password1"));
    }
}